import { Elysia } from 'elysia'
import { Account } from './service/account';
import { jwt } from '@elysiajs/jwt'
import * as crypto from 'crypto';

const account=new Account();

const JWT_SECRET = crypto.randomBytes(32).toString('hex');
const app = new Elysia({ prefix: '/api' })
.use(
  jwt({name: 'jwt',secret: JWT_SECRET, exp: "1y"})
)
.get('/init', () => account.checkInit())
.post('/register', ({body}) => account.register(body))
.post('/login', ({jwt, body})=>account.login(body, jwt))
.get('/auth', ({jwt, headers})=>account.auth(jwt, headers))

export const GET = app.handle;
export const POST = app.handle;