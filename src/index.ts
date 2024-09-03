import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"
import { jwt } from "@elysiajs/jwt"

const app = new Elysia()
.use(cors())
.use(jwt({ secret: process.env.JWT_SECRET as string }))
.get("*", () => Bun.file("web/index.html"))
.get("/assets/:path", ({params: { path }}) => Bun.file("web/assets/"+path))
.get("/icon.svg", () => Bun.file("web/icon.svg"))


app.listen(process.env.PORT as string, () => console.log(`🦊 Server started at ${app.server?.url.origin}`))
