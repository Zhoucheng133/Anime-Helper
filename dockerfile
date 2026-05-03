FROM oven/bun:latest AS frontend-builder

WORKDIR /app/frontend

COPY frontend/package.json frontend/bun.lockb ./
RUN bun install

COPY frontend/ ./
RUN bun run build

FROM oven/bun:latest AS final
WORKDIR /app
ENV TZ=Asia/Shanghai

COPY package.json bun.lockb ./
RUN bun install --production

COPY . .
COPY --from=frontend-builder /app/frontend/dist ./public

RUN bun build \
--compile \
--minify-whitespace \
--minify-syntax \
--target bun \
--outfile server \
./src/index.ts

EXPOSE 3000

CMD ["./server"]