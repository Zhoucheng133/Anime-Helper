import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"
import jwt from "@elysiajs/jwt"
import {Account} from "./router/account";
import { response } from "./interface/interface";

const account=new Account();

const app = new Elysia()
.use(cors())
.use(
  jwt({name: 'jwt',secret: 'AnimeHelper', exp: "1y"})
)
.group("api", (app)=>
  app
  .post("/login", async ({ jwt, body }): Promise<response>=>await account.login(jwt, body))
  .post("/register", ({ body })=>account.register(body))
  .get("/check", async (): Promise<boolean>=>await account.checkInit())
  .get("/auth", ({ jwt, headers})=>account.auth(jwt, headers))
)

// 静态的页面
.get("*", () => Bun.file("web/index.html"))
.get("/assets/:path", ({params: { path }}) => Bun.file("web/assets/"+path))
.get("/icon.svg", () => Bun.file("web/icon.svg"))


app.listen(process.env.PORT as string, () => console.log(`🦊 Server started at ${app.server?.url.origin}`))
