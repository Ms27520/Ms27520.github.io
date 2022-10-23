---
title: 使用Docker-compose部署JoplinServer
date: 2021-09-07 09:25:00
author: 不二臣丶M
tags:
  - Joplin
  - JoplinServer
  - 笔记
categories: 笔记
keywords: 笔记
description: 使用Docker-compose部署JoplinServer
top_img: https://img.ms27520.com/l/1/20220924214414.png
cover:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
abbrlink: 50aa
---

## 准备：Linux服务器、本地电脑（或手机？）、域名、人

> 确保已经备份好所有笔记，本文中使用的是Ubuntu20.04系统的服务器

***

### 1. 更新系统

```bash
apt update && apt upgrade
```

### 2. 安装并启动Docker

```bash
curl -sSL https://get.docker.com/ | sh
systemctl enable docker && systemctl start docker
```

### 3. 安装Docker-compose

```bash
apt install docker-compose
```

### 4. 创建Joplin工作目录并进入

```bash
mkdir Joplin && cd Joplin
```

### 5. 创建`docker-compose.yml`文件，并粘贴配置内容

```bash
vim docker-compose.yml  #或者使用其他你喜欢的编辑器
```

```yml
version: '3'
services:
    db:
        image: postgres:13.1
        ports:
            - "5432:5432"
        restart: unless-stopped
        environment:
            - APP_PORT=22300
            - POSTGRES_PASSWORD=密码
            - POSTGRES_USER=joplin
            - POSTGRES_DB=joplin
    app:
        image: joplin/server:latest
        depends_on:
            - db
        ports:
            - "22300:22300"
        restart: unless-stopped
        environment:
            - APP_BASE_URL=https://你的域名/
            - DB_CLIENT=pg
            - POSTGRES_PASSWORD=密码
            - POSTGRES_DATABASE=joplin
            - POSTGRES_USER=joplin
            - POSTGRES_PORT=5432
            - POSTGRES_HOST=db
```

- 注意把`你的域名`更换为你要用的域名，后续在Joplin配置中也需要填入此域名，`密码`也需要改成你喜欢的

### 6. 开始部署

```bash
docker-compose up -d
```

- -d 表示后台运行

### 7. 域名配置好解析

### 8. nginx反向代理实现https

(1). 安装并启动nginx

```bash
apt install nginx
systemctl enable nginx && systemctl start nginx
```

(2). 编辑nginx配置

```bash
vim /etc/nginx/conf.d/joplin.conf
```

```conf
server {
    server_name  你的域名;
    listen 80;
    #return 301 https://$server_name$request_uri;
    location / {
        proxy_pass http://127.0.0.1:22300;
        proxy_set_header  Host                $http_host;
        proxy_set_header  X-Real-IP           $remote_addr;
        proxy_set_header  X-Forwarded-Ssl     on;
        proxy_set_header  X-Forwarded-For     $proxy_add_x_forwarded_for;
        proxy_set_header  X-Forwarded-Proto   $scheme;
        proxy_set_header  X-Frame-Options     SAMEORIGIN;

        client_max_body_size        100m;
        client_body_buffer_size     128k;

        proxy_buffer_size           4k;
        proxy_buffers               4 32k;
        proxy_busy_buffers_size     64k;
        proxy_temp_file_write_size  64k;
    }
}
```

(3). 安装 certbot 配置https

```bash
apt install python-certbot-nginx
```

(4). 使用 certbot

```bash
certbot
```

(5). 跟着提示走（不详说了，报错说明你nginx配置有问题请`nginx -t`）

(6). 然后选`redirect`（配置自动重定向https）

(7). 然后`nginx -s reload`

### 9. 使用宝塔配置反向代理实现https（与7二选一）

(1). 安装宝塔并安装相关环境(nginx)

> 在"软件商店"安装nginx，或安装宝塔后在弹窗处一键安装

![fc82c376bf7929de67a326ccdff1d7d2.png](https://img.ms27520.com/l/1/fc82c376bf7929de67a326ccdff1d7d2.png)

(2). 添加站点

> 在"网站"中添加站点，填入自己已经配置好DNS解析的域名，PHP版本选择纯静态，其他默认就好

![81af94ca85680cf9b70a4c4cae44af4f.png](https://img.ms27520.com/l/1/81af94ca85680cf9b70a4c4cae44af4f.png)

(3). 设置反向代理

> 打开新建的站点的"设置"，按步骤配置，填入要反代的地址，若JoplinServer在本机，在"目标URL"可填入`http://localhost:22300`或`http://127.0.0.1:22300`，若为其他服务器反代，填入`http://服务器IP:22300`保存即可。

![0b8cdaf4a62ca0f9f9b9b55826d56d7e.png](https://img.ms27520.com/l/1/0b8cdaf4a62ca0f9f9b9b55826d56d7e.png)

(4). 申请SSL证书

> 在站点设置中选择"SSL"，本文使用"Let’s Encrypt"申请，选择"验证方式"和"域名"即可。

![550e54b49a741cf90278ea749fd9407a.png](https://img.ms27520.com/l/1/550e54b49a741cf90278ea749fd9407a.png)

### 10. 访问域名

- JoplinServer默认账号`admin@localhost`，默认密码`admin`

![199245948fa412a00bb40eacb64d4a45.png](https://img.ms27520.com/l/1/199245948fa412a00bb40eacb64d4a45.png)

> 更改账户名和密码

![4ccca67f24f1321c79b2259446dc96c6.png](https://img.ms27520.com/l/1/4ccca67f24f1321c79b2259446dc96c6.png)

> 还可在`Admin`中的`User`添加其他用户

### 11. 在Joplin中配置

> 打开Joplin的选项

![e7e504f0670e1d8be998d8f228b69be0.png](https://img.ms27520.com/l/1/e7e504f0670e1d8be998d8f228b69be0.png)

## 参考

[官方部署文档](https://github.com/laurent22/joplin/blob/dev/packages/server/README.md)

[复读机的记事本](https://www.cx03.space/2021/02/12/docker-%E9%83%A8%E7%BD%B2-joplin-server/)