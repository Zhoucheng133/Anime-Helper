FROM oven/bun AS builder
WORKDIR /app

COPY bun.lockb package.json ./
RUN bun install --production

COPY . .

RUN bun build \
--compile \
--minify-whitespace \
--minify-syntax \
--target bun \
--outfile server \
./src/index.ts

FROM alpine:latest AS runtime
WORKDIR /app
ENV TZ=Asia/Shanghai
ENV NODE_ENV=production

COPY server public /app/

EXPOSE 3000

CMD ["./server"]