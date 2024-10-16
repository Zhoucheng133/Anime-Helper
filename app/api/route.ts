import { Elysia } from 'elysia'
import { Account } from './service/account';

const app = new Elysia({ prefix: '/api' })

const account=new Account();

app.get('/init', () => account.checkInit())
export const GET = app.handle;
export const POST = app.handle;