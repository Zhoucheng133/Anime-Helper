import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"
import jwt from "@elysiajs/jwt"
import {Account} from "./router/account";
import { response } from "./interface/interface";
import { Bangumi } from "./router/bangumi";
import * as crypto from 'crypto';
import { List } from "./router/list";
const JWT_SECRET = crypto.randomBytes(32).toString('hex');

const account=new Account();
const bangumi=new Bangumi();
const list=new List();

const app = new Elysia()
.use(cors())
.use(
  jwt({name: 'jwt',secret: JWT_SECRET, exp: "1y"})
)
.group("api", (app)=>
  app
  // 用户相关
  .post("/login", async ({ jwt, body }): Promise<response>=>await account.login(jwt, body))
  .post("/register", ({ body })=>account.register(body))
  .get("/check", async (): Promise<boolean>=>await account.checkInit())
  .get("/auth", ({ jwt, headers})=>account.auth(jwt, headers))
  // 更新表相关
  .get("/calendar", ({jwt, headers})=>bangumi.getlist(jwt, headers))
  // 用户表相关
  .get("/list", ({jwt, headers})=>list.getlist(jwt, headers))
  .post("/addlist", ( {jwt, headers, body} )=>list.addlist(jwt, headers, body))
  .post("/changeitem", ({jwt, headers, body})=>list.changelist(jwt, headers, body))
)

// 静态的页面
.get("*", () => Bun.file("web/index.html"))
.get("/assets/:path", ({params: { path }}) => Bun.file("web/assets/"+path))
.get("/icon.svg", () => Bun.file("web/icon.svg"))


app.listen(process.env.PORT as string, () => console.log(`🦊 Server started at ${app.server?.url.origin}`))
