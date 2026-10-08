FROM oven/bun:debian AS builder

WORKDIR /app

COPY package.json bun.lock* bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .

RUN cd frontend && bun install && bun run build

RUN bun build --compile --minify-whitespace --minify-syntax \
    --outfile /app/server ./src/index.ts


FROM oven/bun:debian

RUN apt-get update \
    && apt-get install -y --no-install-recommends nginx \
    && rm -rf /var/lib/apt/lists/* /etc/nginx/sites-enabled/default

WORKDIR /app

COPY --from=builder /app/server /app/server
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN printf '#!/bin/bash\n/app/server &\nnginx -g "daemon off;" &\nwait -n\nexit $?\n' > /app/start.sh \
    && chmod +x /app/start.sh

EXPOSE 80
ENTRYPOINT []
CMD ["/app/start.sh"]