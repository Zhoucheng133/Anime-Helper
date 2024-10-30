import { Elysia } from 'elysia'
import { Account } from './service/account';
import { jwt } from '@elysiajs/jwt'
import * as crypto from 'crypto';
import { List } from './service/list';
import { Calendar } from './service/calendar';
import { Downloader } from './service/downloader';

const account=new Account();
const list=new List();
const calendar=new Calendar();
const dl=new Downloader();

const JWT_SECRET = crypto.randomBytes(32).toString('hex');
const app = new Elysia({ prefix: '/api' })
.use(
  jwt({name: 'jwt',secret: JWT_SECRET, exp: "1y"})
)
.get('/init', () => account.checkInit())
.post('/register', ({body}) => account.register(body))
.post('/login', ({jwt, body})=>account.login(body, jwt))
.get('/auth', ({jwt, headers})=>account.auth(jwt, headers))

.get('list/get', ({jwt, headers})=>list.getList(jwt, headers))
.post('list/edit', ({jwt, headers, body})=>list.edit(jwt, headers, body))
.post('list/add', ({jwt, headers, body})=>list.add(jwt, headers, body))
.post('list/del', ({jwt, headers, body})=>list.del(jwt, headers, body))

.get('calendar/get', ({jwt, headers})=>calendar.get(jwt, headers))
.get('calendar/sub/',  ({jwt, headers, query})=>calendar.info(jwt, headers, query))

.get('dl/get', ({jwt, headers})=>dl.get(jwt, headers))
.post('dl/save', ({jwt, headers, body})=>dl.save(jwt, headers, body))
.post('dl/run', ({jwt, headers})=>dl.run(jwt, headers))
.post('dl/stop', ({jwt, headers})=>dl.stop(jwt, headers))
.get('dl/log', ({jwt, headers})=>dl.getlog(jwt, headers))
.post('dl/add', ({jwt, headers, body})=>dl.add(jwt, headers, body))

export const GET = app.handle;
export const POST = app.handle;