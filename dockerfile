FROM node:18.20.4

WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN npm install pm2 -g

ENV TZ=Asia/Shanghai

EXPOSE 8811

CMD ["pm2-runtime", "main.js"]