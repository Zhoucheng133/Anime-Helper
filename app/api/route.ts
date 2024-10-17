import { Elysia } from 'elysia'
import { Account } from './service/account';


const account=new Account();
const app = new Elysia({ prefix: '/api' })
.get('/init', () => account.checkInit())
.post('/register', ({body}) => account.register(body))
export const GET = app.handle;
export const POST = app.handle;