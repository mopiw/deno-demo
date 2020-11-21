import { Game } from "./types.ts";
import { uuid } from " https://deno.land/x/uuid/mod.ts";

// 测试用数据信息
let games: Game[] = [
  {
    id: "1",
    name: "Cyberpunk 2077",
    price: 298,
  },
  {
    id: "2",
    name: "Grand Theft Auto V",
    price: 119,
  },
];

// 获取所有数据
const getGames = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: games,
  };
};

// 按ID获取某条数据
const getGame = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const hadGame = games.find((game) => game.id == params.id);

  hadGame
    ? response.body = { success: true, data: hadGame }
    : response.body = { success: false, data: "Not Found" };
};

// 增加数据
const addGame = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body().value;

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      message: "No data provided",
    };
    return;
  }

  let newGame: Game = {
    id: uuid(),
    name: body.name,
    price: body.price,
  };
  games.push(newGame);

  response.body = {
    success: true,
    data: newGame,
  };
};

// 修改数据
const updateGame = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body().value;

  if (body.id) {
    const index = games.findIndex((e) => e.id === body.id);

    if (index !== -1) {
      games[index] = body;
      response.body = { success: true, data: body };
    } else {
      response.body = { success: false, message: "Not Found" };
    }
  }
};

// 按ID删除数据
const deleteGame = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  games = games.filter((e) => e.id !== params.id);
  response.body = {
    success: true,
    message: params.id + " was deleted",
  };
};

export { addGame, deleteGame, getGame, getGames, updateGame };
