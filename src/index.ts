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

const user=new User();
const list=new List();
const calendar=new Calendar();
const downloader=new Downloader();
const all=new All();

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

.get("/list/get", ({jwt, headers, query}) => list.get(headers, jwt, db, query as any))
.post("/list/edit", ({jwt, headers, body})=>list.edit(headers, jwt, body, db))
.post("/list/add", ({jwt, headers, body})=>list.add(headers, jwt, body, db))
.delete("/list/del/:id", ({jwt, headers, params: { id }})=>list.del(headers, jwt, id, db))

.get("/calendar/get", ({jwt, headers}) => calendar.get(headers, jwt, db))
.get("/calendar/info/:id", ({jwt, headers, params: { id }})=>calendar.info(headers, jwt, id))

.get("/downloader/get", ({jwt, headers}) => downloader.get(headers, jwt, db))
.post("/downloader/save", ({jwt, headers, body}) => downloader.save(headers, jwt, body, db))

.post("/downloader/list/add", ({jwt, headers, body}) => downloader.addToList(headers, jwt, body, db))
.delete("/downloader/list/del/:id", ({jwt, headers, params: { id }}) => downloader.delFromList(headers, jwt, id, db))

.post("/downloader/exclude/add", ({jwt, headers, body}) => downloader.addToExclude(headers, jwt, body, db))
.delete("/downloader/exclude/del/:id", ({jwt, headers, params: { id }}) => downloader.delFromExclude(headers, jwt, id, db))

.post("/download/run", ({jwt, headers}) => downloader.run(headers, jwt, db))
.post("/download/stop", ({jwt, headers}) => downloader.stop(headers, jwt))
.get("/download/log", ({jwt, headers}) => downloader.getLog(headers, jwt))

.get("/all/get", ({jwt, headers}) => all.get(headers, jwt))
.post("/all/download", ({jwt, headers, body}) => all.download(headers, jwt, body, db))

.listen(3000)



const db = new Database('db/database.db');
initDB(db);

console.log(`🦊 Elysia is running at http://127.0.0.1:${app.server?.port}`);