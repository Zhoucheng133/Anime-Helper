import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"
import jwt from "@elysiajs/jwt"
import {Account} from "./router/account";
import { response } from "./interface/interface";
import { Bangumi } from "./router/bangumi";

const account=new Account();
const bangumi=new Bangumi();

const app = new Elysia()
.use(cors())
.use(
  jwt({name: 'jwt',secret: 'AnimeHelper', exp: "1y"})
)
.group("api", (app)=>
  app
  // 用户相关
  .post("/login", async ({ jwt, body }): Promise<response>=>await account.login(jwt, body))
  .post("/register", ({ body })=>account.register(body))
  .get("/check", async (): Promise<boolean>=>await account.checkInit())
  .get("/auth", ({ jwt, headers})=>account.auth(jwt, headers))
  // 列表相关
  .get("/calendar", ({jwt, headers})=>bangumi.getlist(jwt, headers))
)

// 静态的页面
.get("*", () => Bun.file("web/index.html"))
.get("/assets/:path", ({params: { path }}) => Bun.file("web/assets/"+path))
.get("/icon.svg", () => Bun.file("web/icon.svg"))


app.listen(process.env.PORT as string, () => console.log(`🦊 Server started at ${app.server?.url.origin}`))
