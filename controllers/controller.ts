import { Context, REDIRECT_BACK } from "https://deno.land/x/oak/mod.ts";
import { multiParser } from "https://deno.land/x/multiparser/mod.ts";
import { Game } from "../models/game.ts";
import service from "../services/service.ts";

const { cwd } = Deno;

class Controller {
  static async views(ctx: any) {
    // 获取全部
    const games = await service.findAll();
    ctx.render(`${cwd()}/views/index.ejs`, {
      data: { games },
    });
  }

  static async viewsNew(ctx: any) {
    let game = {} as Game;
    ctx.render(`${cwd()}/views/edit.ejs`, {
      title: "新增 CREATE+",
      data: game,
    });
  }

  static async viewsUpdate(ctx: any) {
    // 按ID获取
    const game = await service.findById(ctx.params.id);

    ctx.render(`${cwd()}/views/edit.ejs`, {
      title: "修改 UPDATE",
      data: game[0],
    });
  }

  // 新增
  static async create(ctx: Context) {
    const str = JSON.stringify(await multiParser(ctx.request.serverRequest));
    const json = JSON.parse(str);

    if (!json.fields.id) {
      let game: Game = {
        id: 0,
        name: json.fields.name,
        price: json.fields.price,
      };

      await service.create(game);
    } else {
      let game: Game = {
        id: json.fields.id,
        name: json.fields.name,
        price: json.fields.price,
      };
      await service.update(game);
    }
    ctx.response.redirect(REDIRECT_BACK, "/");
  }

  // 修改
  static async update(ctx: Context) {
    const body = await ctx.request.body().value;
    let game: Game = {
      id: body.id,
      name: body.name,
      price: body.price,
    };

    ctx.response.body = await service.update(game);
  }

  // 删除
  static async delete(ctx: any) {
    const id = ctx.params.id;
    await service.deleteById(id);

    ctx.response.redirect(REDIRECT_BACK, "/");
  }
}

export default Controller;
