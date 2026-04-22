import { Elysia, file } from "elysia";
import { Database } from "bun:sqlite";
import { User } from "./routes/user";
import { initDB } from "./routes/db";
import { nanoid } from "nanoid";
import { List } from "./routes/list";
import { Downloader } from "./routes/downloader";
import { Recent } from "./routes/recent";
import auth, { refresh } from "./routes/auth";
import staticPlugin from "@elysiajs/static";
import { setAccessSecret, setRefreshSecret } from "./config";
const pkg = await import("../package.json");

import { Search } from "./routes/search";
import { Bgm } from "./routes/bgm";
const user=new User();
const list=new List();
const bgm=new Bgm();
const downloader=new Downloader();
const recent=new Recent();
const search=new Search();

// JWT_SECRET在生产模式下使用nanoid生成
setRefreshSecret(nanoid());
setAccessSecret(nanoid());
// setRefreshSecret("helper");
// setAccessSecret("helper");

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
        break;
    
      default:
        const authResponse=await auth(headers);
        if(!authResponse.ok){
          return authResponse;
        }
    }
  }
})

.get('/api/init', () => user.checkInit(db))
.post("/api/register", ({ body }) => user.register(body, db))
.post("/api/login", ({ body, cookie }) => user.login(body, db, cookie))
.get("/api/refresh", ({ cookie }) => refresh(cookie))
.post("/api/changePassword", ({ body, headers }) => user.changePassword(body, db, headers))

.get("/api/auth", ({ headers }) => auth(headers))

.get("/api/list/get", ({ query }) => list.get(db, query as any))
.post("/api/list/edit", ({ body })=>list.edit(body, db))
.post("/api/list/add", ({ body })=>list.add(body, db))
.get("/api/list/bgm/search/:keyword", ({params: { keyword }})=>bgm.search(keyword))
.get("/api/list/bgm/updates/:id", ({params: { id }}) => bgm.info(id))
.post("/api/list/bind", ({ body })=>list.bind(body, db))
.post("/api/list/unbind", ({ body })=>list.unbind(body, db))
.delete("/api/list/del/:id", ({params: { id }})=>list.del(id, db))

.get("/api/calendar/get", () => bgm.calendar(db))
.get("/api/calendar/info/:id", ({params: { id }})=>bgm.info(id))

.get("/api/downloader/get", () => downloader.get(db))
.post("/api/downloader/save", ({ body }) => downloader.save(body, db))
.post("/api/downloader/check", ({ body }) => downloader.check(body))

.post("/api/downloader/list/add", ({ body }) => downloader.addToList(body, db))
.delete("/api/downloader/list/del/:id", ({params: { id }}) => downloader.delFromList(id, db))

.post("/api/downloader/exclude/add", ({ body }) => downloader.addToExclude(body, db))
.delete("/api/downloader/exclude/del/:id", ({params: { id }}) => downloader.delFromExclude(id, db))

.post("/api/download/run", () => downloader.run(db))
.post("/api/download/stop", () => downloader.stop())
.get("/api/download/log", () => downloader.getLog())

.get("/api/recent/get", ({ query }) => recent.get(query as any))
.post("/api/recent/download", ({ body }) => recent.download(body, db))

.get("/api/search/:keyword", ({ params: { keyword } }) => search.get(keyword))

.get("/api/version", () => pkg.version)

.get("/*", ()=>file("public/index.html"))

.listen(3000)

const db = new Database('db/database.db');
initDB(db);

console.log(`🦊 Elysia is running at http://127.0.0.1:${app.server?.port}`);