# Anime Helper

<img src="assets/icon.svg" width=100></img>

![](https://img.shields.io/badge/ElysiaJS-1.1.5-white?)
![](https://img.shields.io/badge/bun-1.1.26-yellow)
![](https://img.shields.io/badge/axios-1.7.7-blue)
![](https://img.shields.io/badge/crypto_js-4.2.0-purple)
![](https://img.shields.io/badge/lowdb-7.0.1-pink)
![](https://img.shields.io/badge/xml2js-0.6.2-red)

![License](https://img.shields.io/badge/License-MIT-dark_green)

一个追番&自动下载工具，如需在本地搭建，务必先阅读[使用说明](#使用说明)

前端页面[在这里](https://github.com/Zhoucheng133/Anime-Helper-Web)

## 截图

### 列表

查看目前观看进度，根据总集数&更新集数自动推断是否在更新/完结  
也可以在这里添加到下载器列表

![列表](assets/list.png)

### 每日放送

可以点击标题来添加到列表中

![每日放送](assets/calendar.png)

### 下载器

这里会通过Mikan或者Acgrip自动下载需要下载的番剧（注意，你需要在这个页面手动添加需要下载的番剧&字幕组信息或者在列表页添加到这里）

![下载器](assets/downloader.png)

## 使用说明

这个项目需要将前端页面和后端分开搭建，并且需要使用Docker搭建在服务器上

### 后端（本项目）

1. 从Release中下载生产文件，内含dockerfile（如果没有dockerfile，使用代码中的dockerfile也可以）
2. 在服务器上创建镜像
    ```bash
    docker build -t helper <生产文件位置>
    ```
3. 使用下面的命令来部署
    ```bash
    sudo docker run -d --restart always -p <服务器主机端口号>:8080 -v <数据存放的位置*>:/app/db --name helper helper
    ```
    \*这个位置为服务器主机上的绝对位置，理论上随意，你也可以不使用-v属性直接将数据存放在Docker容器里

### 前端
1. 你需要前往[前端页面仓库](https://github.com/Zhoucheng133/Anime-Helper-Web)的Release页面下载生产文件，内含dockerfile（如果没有dockerfile，使用Web仓库代码中的dockerfile也可以）
2. 在服务器上创建镜像
    ```bash
    docker build -t helper_web <Web生产文件位置>
    ```
3. 使用下面的命令来部署
    ```bash
    sudo docker run -d --restart always -p <服务器主机端口号*>:3000 helper_web helper_web
    ```
    \*这个端口号不要与后端端口号冲突

### 完成搭建
你需要使用Nginx将两个服务联系起来
```conf
server{
  listen <服务地址>;
  server_name helper;

  location /api{
    proxy_pass http://127.0.0.1:<后端服务端口>/api;
  }

  location /{
    proxy_pass http://127.0.0.1:<前端页面端口>;
  }
}
```


### 下载器配置

#### 在Docker上部署Aria服务

你需要在搭建设备局域网内（或者就在该设备上）有Aria2服务，详细你可以[查看这里](https://github.com/P3TERX/Aria2-Pro-Docker)。如果你通过该文档安装了Aria2，那么默认的Aria2地址为`http://<ip>:16800/jsonrpc`，密码在你通过Docker安装的时候作为参数写入

#### 使用Motrix下载器 (不推荐)
你也可以通过[Motrix](https://motrix.app/zh-CN)作为Aria下载器，其下载端口和密码在该软件的设置中

## 更新日志

### 1.1.0 (2024/10/7)
- 页面使用Nuxt重构
- 添加更多筛选列表的方式
- 添加从每日更新中自动填充总集数和更新集数

### 1.0.3 (2024/9/18)
- 添加每日放送中已存在的提示
- 添加每日放送中显示列表中的项

<details>
<summary>过去的版本</summary>

### 1.0.2 (2024/9/14)
- 修复日志长度无限制的问题

### 1.0.1 (2024/9/12)
- 切换到bgm官方api
- 精简了一些代码


### 1.0.0 (2024/9/11)
- 第一个版本

</details>

## 一些API

[Bangumi API](https://bangumi.github.io/api/)