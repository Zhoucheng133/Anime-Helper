FROM oven/bun
WORKDIR /app
COPY . .
ENV TZ=Asia/Shanghai
EXPOSE 8080

CMD ["bun", "index.js"]