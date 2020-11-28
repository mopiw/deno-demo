import { Router } from "https://deno.land/x/oak/mod.ts";
import Controller from "../controllers/controller.ts";

const router = new Router();

router.get("/", Controller.views)
  .get("/new", Controller.viewsNew)
  .get("/edit/:id", Controller.viewsUpdate)
  .post("/", Controller.edit)
  .get("/delete/:id", Controller.delete);

export default router;
