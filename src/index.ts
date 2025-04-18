import { Elysia } from "elysia";
import { Database } from "bun:sqlite";
// import { cors } from '@elysiajs/cors';
import { User } from "./routes/user";
import { initDB } from "./routes/db";
import jwt from "@elysiajs/jwt";
import { nanoid } from "nanoid";
import { List } from "./routes/list";
import { Calendar } from "./routes/calendar";
import { Downloader } from "./routes/downloader";
import { All } from "./routes/all";
import auth from "./routes/auth";

const user=new User();
const list=new List();
const calendar=new Calendar();
const downloader=new Downloader();
const all=new All();

// JWT_SECRET在生产模式下使用nanoid生成

const JWT_SECRET = nanoid();
// const JWT_SECRET='Helper';
const app = new Elysia({ prefix: '/api' })
// .use(cors())
.use(jwt({name: 'jwt',secret: JWT_SECRET, exp: "1y"}))
.onBeforeHandle(async ({path, headers, jwt})=>{
  switch (path) {
    case "/api/init":
    case "/api/register":
    case "/api/login":
    case "/api/auth":
      break;
  
    default:
      const authResponse=await auth(headers, jwt);
      if(!authResponse.ok){
        return authResponse;
      }
  }
})

.get('/init', () => user.checkInit(db))
.post("/register", ({body}) => user.register(body, db))
.post("/login", ({body, jwt}) => user.login(body, jwt, db))
.get("/auth", ({jwt, headers}) => user.checkAuth(headers, jwt))

.get("/list/get", ({query}) => list.get(db, query as any))
.post("/list/edit", ({body})=>list.edit(body, db))
.post("/list/add", ({body})=>list.add(body, db))
.delete("/list/del/:id", ({params: { id }})=>list.del(id, db))

.get("/calendar/get", () => calendar.get(db))
.get("/calendar/info/:id", ({params: { id }})=>calendar.info(id))

.get("/downloader/get", () => downloader.get(db))
.post("/downloader/save", ({body}) => downloader.save(body, db))

.post("/downloader/list/add", ({body}) => downloader.addToList(body, db))
.delete("/downloader/list/del/:id", ({params: { id }}) => downloader.delFromList(id, db))

.post("/downloader/exclude/add", ({body}) => downloader.addToExclude(body, db))
.delete("/downloader/exclude/del/:id", ({params: { id }}) => downloader.delFromExclude(id, db))

.post("/download/run", () => downloader.run(db))
.post("/download/stop", () => downloader.stop())
.get("/download/log", () => downloader.getLog())

.get("/all/get", () => all.get())
.post("/all/download", ({body}) => all.download(body, db))

.listen(3000)



const db = new Database('db/database.db');
initDB(db);

console.log(`🦊 Elysia is running at http://127.0.0.1:${app.server?.port}`);