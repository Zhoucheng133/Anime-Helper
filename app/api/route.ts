import { Elysia } from 'elysia'
import { Account } from './service/account';
import { jwt } from '@elysiajs/jwt'
import * as crypto from 'crypto';
import { List } from './service/list';

const account=new Account();
const list=new List();

// const JWT_SECRET = crypto.randomBytes(32).toString('hex');
const JWT_SECRET = "JWT_SECRET";
const app = new Elysia({ prefix: '/api' })
.use(
  jwt({name: 'jwt',secret: JWT_SECRET, exp: "1y"})
)
.get('/init', () => account.checkInit())
.post('/register', ({body}) => account.register(body))
.post('/login', ({jwt, body})=>account.login(body, jwt))
.get('/auth', ({jwt, headers})=>account.auth(jwt, headers))

.get('list/get', ({jwt, headers})=>list.getList(jwt, headers))

export const GET = app.handle;
export const POST = app.handle;