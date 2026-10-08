FROM oven/bun:latest
WORKDIR /app
ENV TZ=Asia/Shanghai

COPY package.json bun.lockb ./
RUN bun install --production

COPY . .

RUN cd frontend \
&& bun install \
&& bun run build \
&& find . -mindepth 1 -maxdepth 1 ! -name dist -exec rm -rf {} + \
&& rm -rf /app/frontend/node_modules

RUN bun build \
--compile \
--minify-whitespace \
--minify-syntax \
--target bun \
--outfile server \
./src/index.ts

EXPOSE 3000

CMD ["./server"]