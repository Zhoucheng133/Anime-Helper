FROM oven/bun

WORKDIR /app

COPY . .
ENV TZ=Asia/Shanghai

EXPOSE 3000

RUN bun install
RUN bun run build

CMD ["bun", "run", "start"]