import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })

app.get('/', () => 'hello Next')

export const GET = app.handle 
export const POST = app.handle 