import { Elysia } from "elysia";
import { Database } from "bun:sqlite";
import { cors } from '@elysiajs/cors';
import { User } from "./routes/user";
import { initDB } from "./routes/db";
import jwt from "@elysiajs/jwt";
import { nanoid } from "nanoid";
import { List } from "./routes/list";

const user=new User();
const list=new List();

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

.listen(3000)



const db = new Database('db/database.db');
initDB(db);

console.log(`🦊 Elysia is running at http://127.0.0.1:${app.server?.port}`);