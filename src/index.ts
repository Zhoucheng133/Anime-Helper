import { Elysia, file } from "elysia";
import { Database } from "bun:sqlite";
import { User } from "./routes/user";
import { initDB } from "./routes/db";
import { nanoid } from "nanoid";
import { List } from "./routes/list";
import { Calendar } from "./routes/calendar";
import { Downloader } from "./routes/downloader";
import { Recent } from "./routes/recent";
import auth, { refresh } from "./routes/auth";
import staticPlugin from "@elysiajs/static";
import { setJwtSecret } from "./config";

import { Search } from "./routes/search";
const user=new User();
const list=new List();
const calendar=new Calendar();
const downloader=new Downloader();
const recent=new Recent();
const search=new Search();

// JWT_SECRET在生产模式下使用nanoid生成

const JWT_SECRET = nanoid();
// const JWT_SECRET='Helper';

setJwtSecret(JWT_SECRET);

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
.post("/api/login", ({body, cookie}) => user.login(body, db, cookie))
.get("/api/refresh", ({cookie}) => refresh(cookie))

.get("/api/auth", ({headers}) => auth(headers))

.get("/api/list/get", ({ query }) => list.get(db, query as any))
.post("/api/list/edit", ({ body })=>list.edit(body, db))
.post("/api/list/add", ({ body })=>list.add(body, db))
.delete("/api/list/del/:id", ({params: { id }})=>list.del(id, db))

.get("/api/calendar/get", () => calendar.get(db))
.get("/api/calendar/info/:id", ({params: { id }})=>calendar.info(id))

.get("/api/downloader/get", () => downloader.get(db))
.post("/api/downloader/save", ({ body }) => downloader.save(body, db))

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

.get("/*", ()=>file("public/index.html"))

.listen(3000)

const db = new Database('db/database.db');
initDB(db);

console.log(`🦊 Elysia is running at http://127.0.0.1:${app.server?.port}`);