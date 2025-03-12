import { Elysia } from "elysia";
import { Database } from "bun:sqlite";
import { cors } from '@elysiajs/cors';
import { User } from "./routes/user";
import { initDB } from "./routes/db";
import jwt from "@elysiajs/jwt";
import { nanoid } from "nanoid";
import { List } from "./routes/list";
import { Calendar } from "./routes/calendar";
import { Downloader } from "./routes/downloader";

const user=new User();
const list=new List();
const calendar=new Calendar();
const downloader=new Downloader();

// const JWT_SECRET = nanoid();
const JWT_SECRET='Helper';
const app = new Elysia({ prefix: '/api' })
.use(cors())
.use(jwt({name: 'jwt',secret: JWT_SECRET, exp: "1y"}))

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
.post("/downloader/list/add", ({jwt, headers, body})=>downloader.addToList(headers, jwt, body, db))

.listen(3000)



const db = new Database('db/database.db');
initDB(db);

console.log(`🦊 Elysia is running at http://127.0.0.1:${app.server?.port}`);