import { Context, Router } from "https://deno.land/x/oak/mod.ts";
import { addGame, deleteGame, getGame, getGames, updateGame } from "./games.ts";

const router = new Router();

router.get("/hello", (context: Context) => {
  context.response.body = "hello world";
})
  .get("/games", getGames)
  .get("/game/:id", getGame)
  .post("/game", addGame)
  .put(
    "/game",
    updateGame,
  )
  .delete("/game/:id", deleteGame);

export default router;
