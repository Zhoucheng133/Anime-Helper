FROM oven/bun

WORKDIR /app

COPY . .

ENV TZ=Asia/Shanghai

EXPOSE 3000

CMD ["bun", "index.js"]