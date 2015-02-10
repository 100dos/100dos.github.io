##WEB架构

---

### 开篇

@fragment

* 年底了，干的不爽。升职、加薪、年终全无！
* 打算年后辞职去创业，找好了合作小伙伴，有产品、UI、Adroid、IOS开发 + 某PHP狗
* PHP狗 == Web Service开发 + 网站开发 + 服务器运维

---

### 从哪里开始？

---

### 服务器 & IP & 域名

---

### 解决服务器

@fragment

* 购买主机 && IDC 托管 || 自建机房
* 云服务 =>  AWS、腾讯、阿里、Azure
* Saas服务 => stackmod、parse
* ... 

---

### 域名

* [Godaddy](http://www.godaddy.com)
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

![http request](img/web-act/http-request.png)

---


### 服务器压力变大？

@fragment

* CDN 内容分发网络 

![CDN](img/web-act/cdn-filter.jpg)

---

### 负载均衡

* DNS 轮询
* 硬负载 F5
* 软负载 lvs、haproxy、nginx

---

#### Haproxy 配置

![Haproxy 配置](img/web-act/balance-haproxy.png)

* roundrobin 轮询
* static-rr 根据权重
* leastconn 最少连接的服务器优先处理
* source 根据请求源IP，跟nginx的IP_hash机制类似
* ...

---

### 文件共享 && SESSION共享

* NFS && Memcached 

---

### Mysql 解决负载

#### 1. Mysql 分片 

* 业务层面考虑 : 水平分割、垂直分割

![mysql 分片](img/web-act/mysql-table-order-info.png)

---

#### 2. Mysql 只读从库负载

* 同样可以使用haproxy或者lvs对slave的查询做负载

![Mysql 负载](img/web-act/mysql-slave-balance.png)


---

### 好用的 Mysql 工具

* XtraBackup
* Innotop 
* Maatkit

---

### 数据缓存 && 分布式存储

* Memcached
* Redis
* Mongo
* Cassandra

---

### 搜索服务

* Solr
* Lucene
* Sphinx
* Elastic Search 

---

### 简单web架构

![简单web架构](img/web-act/web-simple-act.png)

---

### 复杂web架构

![复杂web架构](img/web-act/web-complex-act.png)

---

### 数据备份

* 数据库 
* 用户文件
* 服务器日志
* 代码 && 文档

---

### 服务器监控

* Nagios
* Cacti

--- 

### 综上，概括简单的web架构

![color-web架构](img/web-act/web-act-color.png)

---

### What is 牛逼的web架构？

1. 解决访问带来的压力，无需再更改架构，只需要花钱购买服务器扩展即可解决;
2. 部署简单，分分钟服务器可上线投入使用;
3. 任何接点出现问题，不影响服务，且可尽快恢复。




---

### 感谢开源

* 免费
* 成熟、稳定
* 使用简单
* 更多的用户使用，完善的技术支持

---

## Thanks

<p style="font-size:6em"><i class="icon-smile"></i></p>





