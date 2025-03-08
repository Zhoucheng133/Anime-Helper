import { Elysia } from "elysia";
import { Database } from "bun:sqlite";
import { cors } from '@elysiajs/cors';
import * as crypto from 'crypto';

const app = new Elysia({ prefix: '/api' })
.use(cors())
.listen(3000)

// const JWT_SECRET = crypto.randomBytes(32).toString('hex');
const JWT_SECRET='Helper';

const db = new Database('db/database.db');

console.log(`🦊 Elysia is running at http://127.0.0.1:${app.server?.port}`);