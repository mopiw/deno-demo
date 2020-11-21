import { Application } from "https://deno.land/x/oak/mod.ts";
import { bold, green, yellow } from "https://deno.land/std/fmt/colors.ts";
import router from "./router.ts";

const PORT = 8000;
const HOST = "localhost";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log("=======================================");
  console.log(
    `=${yellow(" Listening on:")} ${green(bold(url))} =`,
  );
  console.log("=======================================");
});

await app.listen(`${HOST}:${PORT}`);
