FROM oven/bun:latest AS builder

WORKDIR /app

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
    --outfile /app/server \
    ./src/index.ts

FROM nginx:alpine

WORKDIR /app

COPY --from=oven/bun:latest /usr/local/bin/bun /usr/local/bin/bun
COPY --from=builder /app/server /app/server
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["/bin/sh", "-c", "/app/server & nginx -g 'daemon off;'"]