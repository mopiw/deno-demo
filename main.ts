import { Application, send } from "https://deno.land/x/oak/mod.ts";
import {
  adapterFactory,
  engineFactory,
  viewEngine,
} from "./mods/view-engine-1.4.2/mod.ts";
import { green } from "https://deno.land/std/fmt/colors.ts";
import router from "./routers/index.ts";

const PORT = 8000;
const HOST = "localhost";

const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();

const app = new Application();
app.use(viewEngine(oakAdapter, ejsEngine));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
  });
});

app.addEventListener("listen", ({ secure, hostname, port }) => {
  console.log(
    `${green(" ✅ Listening on")}: ${
      secure ? "https://" : "http://"
    }${hostname ??
      "localhost"}:${port}`,
  );
});

await app.listen(`${HOST}:${PORT}`);
