FROM oven/bun

WORKDIR /app

COPY . .
ENV TZ=Asia/Shanghai

EXPOSE 3000

RUN bun install

# 如果已经拷贝了next文件则不需要下面这行
RUN bun run build

CMD ["bun", "run", "start"]