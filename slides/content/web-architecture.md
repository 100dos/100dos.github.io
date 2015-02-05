##WEB架构

---

### 开篇

@fragment

* 年底了，干的不爽。升职、加薪、年终全无！
* 打算年后辞职去创业，找好了合作小伙伴，有产品、UI、Adroid、IOS开发 + PHP狗
* PHP狗 == Web Service开发 + 网站开发 + 服务器运维

---

### 从哪里开始？

---

### 服务器 & IP & 域名

---

### 解决服务器

@fragment

* 购买主机 && IDC 托管 || 自建机房
* 云服务
* Saas服务

---

### 域名

@fragment

* Godaddy
* 万网
* ...

---

### Platform 

* Linux 
* Nginx
* Mysql
* PHP

---

### LNMP 如何处理Http请求?

---

### 服务器压力变大？

@fragment

* 分析服务器上的日志，原来是图片请求太多导致的

![CDN](img/web-act/cdn-filter.jpg)

* CDN 内容分发网络 

---

### 

![CDN](img/web-act/balance-haproxy.png)

---

### 简单web架构

![简单web架构](img/web-act/web-simple-act.png)

---

### Pinterest 的经验

@fragment

1. Architecture is doing the right thing when growth can be handled by adding more of the same stuff. You want to be able to scale by throwing money at a problem which means throwing more boxes at a problem as you need them. If your architecture can do that, then you’re golden.

2. When you push something to the limit all technologies fail in their own special way. This lead them to evaluate tool choices with a preference for tools that are: mature; really good and simple; well known and liked; well supported; consistently good performers; failure free as possible; free. Using these criteria they selected: MySQL, Solr, Memcache, and Redis. Cassandra and Mongo were dropped.

---

## Thanks

<p style="font-size:6em"><i class="icon-smile"></i></p>





