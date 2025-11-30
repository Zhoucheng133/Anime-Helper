FROM oven/bun:latest
WORKDIR /app

COPY . .
ENV TZ=Asia/Shanghai

RUN bun install

RUN bun build \
--compile \
--minify-whitespace \
--minify-syntax \
--target bun \
--outfile server \
./src/index.ts

EXPOSE 3000

CMD ["./server"]