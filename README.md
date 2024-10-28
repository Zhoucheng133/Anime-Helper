# Anime Helper

<img src="assets/icon.svg" width=100></img>

![License](https://img.shields.io/badge/License-MIT-dark_green)

一个追番&自动下载工具，如需在本地搭建，务必先阅读[使用说明](#使用说明)

前端页面[在这里](https://github.com/Zhoucheng133/Anime-Helper-Web)

新版本测试中🏗️

## 使用说明

这个项目由ElysiaJS (后端)和Nextjs(前端)开发

这个项目需要将前端页面和后端分开搭建，并且需要使用Docker搭建在服务器上

### 下载器配置

#### 在Docker上部署Aria服务

你需要在搭建设备局域网内（或者就在该设备上）有Aria2服务，详细你可以[查看这里](https://github.com/P3TERX/Aria2-Pro-Docker)。如果你通过该文档安装了Aria2，那么默认的Aria2地址为`http://<ip>:16800/jsonrpc`，密码在你通过Docker安装的时候作为参数写入

#### 使用Motrix下载器 (不推荐)
你也可以通过[Motrix](https://motrix.app/zh-CN)作为Aria下载器，其下载端口和密码在该软件的设置中

## 更新日志

### 2.0.0 (?)
- 使用Nextjs重构

<details>
<summary>过去的版本</summary>

### 1.1.0 (2024/10/7)
- 页面使用Nuxt重构
- 添加更多筛选列表的方式
- 添加从每日更新中自动填充总集数和更新集数

### 1.0.3 (2024/9/18)
- 添加每日放送中已存在的提示
- 添加每日放送中显示列表中的项

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