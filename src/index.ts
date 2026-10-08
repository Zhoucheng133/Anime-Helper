import { Elysia, file } from "elysia";
import { Database } from "bun:sqlite";
import { User } from "./routes/user";
import { initDB } from "./config/db";
import { List } from "./routes/list";
import { Downloader } from "./routes/downloader";
import { Recent } from "./routes/recent";
import auth, { refresh } from "./routes/auth";
import staticPlugin from "@elysiajs/static";
import pkg from "../package.json";

import { Search } from "./routes/search";
import { Bgm } from "./routes/bgm";
import { loadConfig } from "./config";
const db = new Database('db/database.db');
initDB(db);

const user=new User(db);
const list=new List(db);
const bgm=new Bgm(db);
const downloader=new Downloader(db);
const recent=new Recent(db);
const search=new Search();

loadConfig();

const app = new Elysia()
.use(staticPlugin({
  prefix: "/",
  alwaysStatic: true,
}))

.onBeforeHandle(async ({path, headers})=>{
  if(path.startsWith("/api")){
    switch (path) {
      case "/api/init":
      case "/api/register":
      case "/api/login":
      case "/api/auth":
      case "/api/refresh":
      case "/api/version":
      case "/api/logout":
        break;
    
      default:
        const authResponse=await auth(headers);
        if(!authResponse.ok){
          return authResponse;
        }
    }
  }
})

.get('/api/init', () => user.checkInit())
.post("/api/register", ({ body }) => user.register(body))
.post("/api/login", ({ body, cookie }) => user.login(body, cookie))
.post("/api/logout", ({ cookie }) => user.logout(cookie))
.get("/api/refresh", ({ cookie }) => refresh(cookie))
.post("/api/changePassword", ({ body, headers }) => user.changePassword(body, headers))

.get("/api/auth", ({ headers }) => auth(headers))

.get("/api/list/get", ({ query }) => list.get(query as any))
.post("/api/list/edit", ({ body })=>list.edit(body))
.post("/api/list/add", ({ body })=>list.add(body))
.get("/api/list/bgm/search/:keyword", ({params: { keyword }})=>bgm.search(keyword))
.get("/api/list/bgm/updates/:id", ({params: { id }}) => bgm.info(id))
.post("/api/list/bind", ({ body })=>list.bind(body))
.post("/api/list/unbind", ({ body })=>list.unbind(body))
.delete("/api/list/del/:id", ({params: { id }})=>list.del(id))

.get("/api/calendar/get", () => bgm.calendar())
.get("/api/calendar/info/:id", ({params: { id }})=>bgm.info(id))

.get("/api/downloader/get", () => downloader.get())
.post("/api/downloader/save", ({ body }) => downloader.save(body))
.post("/api/downloader/check", ({ body }) => downloader.check(body))
.post("/api/downloader/list/add", ({ body }) => downloader.addToList(body))
.delete("/api/downloader/list/del/:id", ({params: { id }}) => downloader.delFromList(id))
.post("/api/downloader/exclude/add", ({ body }) => downloader.addToExclude(body))
.delete("/api/downloader/exclude/del/:id", ({params: { id }}) => downloader.delFromExclude(id))
.post("/api/downloader/saverunning", ({ body }) => downloader.saveRunning(body))

.post("/api/download/run", () => downloader.run())
.post("/api/download/stop", () => downloader.stop())
.get("/api/download/log", () => downloader.getLog())

.get("/api/recent/get", ({ query }) => recent.get(query as any))
.post("/api/recent/download", ({ body }) => recent.download(body))

.get("/api/search/:keyword", ({ params: { keyword } }) => search.get(keyword))

.get("/api/version", () => pkg.version)

.listen(3000)

console.log(`🦊 Elysia is running at http://127.0.0.1:${app.server?.port}`);