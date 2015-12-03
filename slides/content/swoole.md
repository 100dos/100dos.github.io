##Swoole

---

### PHP发展历史

* PHP1 在1994年由Rasmus Lerdorf创建,用Perl 封装的简单工具。并用C重写，发布一个完整的版本，将其命名为Personal Home Page Tools。

* PHP2 1996年Rasmus发布，这是一个基本完善的PHP程序包。它不仅可以访问数据库，而且可以嵌入HTML页面。吸引了很多开发者。

* PHP3 第一个官方正式版本发行。拥有强大的可扩展性，并且有了新的名称 PHP：Hypertext Preprocessor。

* PHP4 新的PHP核心被成为“Zend” （以Zeev和Andi的名字命名）引擎，于2000年5月随着新版PHP4.0发布。

---

### PHP 发展史

* PHP5 2004年7月，PHP5正式版本的发布，标志着一个全新的PHP时代的到来。它的核心是第二代Zend引擎，并引入了对全新的PECL模块的支持。PHP5的最大特点是引入了面向对象的全部机制。

* PHP5.3~PHP5.6 2007年发布5.3版本，添加命名空间，有了包管理的概念。而后一直到PHP5.6又相继增加了匿名函数、闭包、Traits、短数组、生成器语法、函数自动变长参数等新特性，使PHP的语法越来越灵活。

* PHP7 革命性的版本，即将发布。重新设计了PHP引擎，加入了静态语言才有的AST自动类型分析、JIT即时编译，使得PHP语言的性能大幅提升。PHP7解决了动态语言性能差的问题，PHP在未来既有动态语言的开发效率，又具有了静态语言般的运行性能。

---

### Swoole：重新定义PHP
![http request](http://www.swoole.com/static/images/swoole.png)

* PHP语言的高性能网络通信框架，提供了PHP语言的异步多线程服务器，异步TCP/UDP网络客户端，异步MySQL，数据库连接池，AsyncTask，消息队列，毫秒定时器，异步文件读写，异步DNS查询。

* Swoole可以广泛应用于互联网、移动通信、企业软件、云计算、网络游戏、物联网、车联网、智能家居等领域。 使用PHP+Swoole作为网络通信框架，可以使企业IT研发团队的效率大大提升，更加专注于开发创新产品。

---

### 优势

* 纯C编写性能极强
* 简单易用开发效率高
* 事件驱动异步非阻塞
* 并发百万TCP连接
* TCP/UDP/UnixSock
* 服务器端/客户端
* 全异步/半异步半同步
* 支持多进程/多线程
* CPU亲和性/守护进程
* 支持IPv4/IPv6网络

---

### 用户与案例

* [http://wiki.swoole.com/wiki/page/p-case.html](http://wiki.swoole.com/wiki/page/p-case.html)

---

##### 性能测试

    Nginx   ab -c 100 -n 100000 http://localhost/index.html
    Swoole  ab -c 100 -n 100000 http://127.0.0.1:8848/
    Node.js ab -c 100 -n 100000 http://127.0.0.1:8080/
    Golang  ab -c 100 -n 100000 http://127.0.0.1:8080/

##### QPS对比

    Nginx:      Requests per second:    23770.74 [#/sec] (mean)
    Golang:     Requests per second:    21807.00 [#/sec] (mean)
    Swoole:     Requests per second:    19711.22 [#/sec] (mean)
    Node.js:    Requests per second:    6680.53 [#/sec] (mean)

##### 结果评价

* Nginx、Golang、Swoole都是多线程Reactor的，可以充分利用多核，所以成绩是node.js的数倍。 Swoole中的PHP代码需要编译为opcode来执行，每条opcode都是一次函数调用。语言的执行效率效率比C语言（Nginx）,Golang这种编译型的语言差一些。 Node.js的http模块不是多线程的，无法利用多核，结果最差。这里并不是说node.js的性能差，使用第三方的node扩展cluster也可以使node.js变成多进程。

* 在最新的swoole-1.7.6+版本中，基准压力测试swoole无论是短连接还是长连接，均已超过了Golang。

---

#### 事例代码

    // Http Server 

    $serv = new swoole_http_server("127.0.0.1", 9502);

    $serv->on('Request', function($request, $response) {
        var_dump($request->get);
        var_dump($request->post);
        var_dump($request->cookie);
        var_dump($request->files);
        var_dump($request->header);
        var_dump($request->server);

        $response->cookie("User", "Swoole");
        $response->header("X-Server", "Swoole");
        $response->end("<h1>Hello Swoole!</h1>");
    });

    $serv->start();



    //WebSocket Server

    $serv = new swoole_websocket_server("127.0.0.1", 9502);

    $serv->on('Open', function($server, $req) {
        echo "connection open: ".$req->fd;
    });

    $serv->on('Message', function($server, $frame) {
        echo "message: ".$frame->data;
        $server->push($frame->fd, json_encode(["hello", "world"]));
    });

    $serv->on('Close', function($server, $fd) {
        echo "connection close: ".$fd;
    });

    $serv->start();

    // Tcp Server

    $serv = new swoole_server("127.0.0.1", 9501);
    $serv->set(array(
        'worker_num' => 8,   //工作进程数量
        'daemonize' => true, //是否作为守护进程
    ));
    $serv->on('connect', function ($serv, $fd){
        echo "Client:Connect.\n";
    });
    $serv->on('receive', function ($serv, $fd, $from_id, $data) {
        $serv->send($fd, 'Swoole: '.$data);
        $serv->close($fd);
    });
    $serv->on('close', function ($serv, $fd) {
        echo "Client: Close.\n";
    });
    $serv->start();

    
    // TCP Client

    $client = new swoole_client(SWOOLE_SOCK_TCP, SWOOLE_SOCK_ASYNC);
    //设置事件回调函数
    $client->on("connect", function($cli) {
        $cli->send("hello world\n");
    });
    $client->on("receive", function($cli, $data){
        echo "Received: ".$data."\n";
    });
    $client->on("error", function($cli){
        echo "Connect failed\n";
    });
    $client->on("close", function($cli){
        echo "Connection close\n";
    });
    //发起网络连接
    $client->connect('127.0.0.1', 9501, 0.5);

    // Task
    $serv = new swoole_server("127.0.0.1", 9502);
    $serv->set(array('task_worker_num' => 4));
    $serv->on('Receive', function($serv, $fd, $from_id, $data) {
        $task_id = $serv->task("Async");
        echo "Dispath AsyncTask: id=$task_id\n";
    });
    $serv->on('Task', function ($serv, $task_id, $from_id, $data) {
        echo "New AsyncTask[id=$task_id]".PHP_EOL;
        $serv->finish("$data -> OK");
    });
    $serv->on('Finish', function ($serv, $task_id, $data) {
        echo "AsyncTask[$task_id] Finish: $data".PHP_EOL;
    });
    $serv->start();

---

### MYSQL 数据库连接池

* 利用swoole提供的task功能可以很方便做出一个连接池来。


    $serv = new swoole_server("127.0.0.1", 9508);
    $serv->set(array(
        'worker_num' => 100,
        'task_worker_num' => 10, //MySQL连接的数量
    ));

    function my_onReceive($serv, $fd, $from_id, $data)
    {
        //taskwait就是投递一条任务，这里直接传递SQL语句了
        //然后阻塞等待SQL完成
        $result = $serv->taskwait("show tables");
        if ($result !== false) {
            list($status, $db_res) = explode(':', $result, 2);
            if ($status == 'OK') {
                //数据库操作成功了，执行业务逻辑代码，这里就自动释放掉MySQL连接的占用
                $serv->send($fd, var_export(unserialize($db_res), true) . "\n");
            } else {
                $serv->send($fd, $db_res);
            }
            return;
        } else {
            $serv->send($fd, "Error. Task timeout\n");
        }
    }

    function my_onTask($serv, $task_id, $from_id, $sql)
    {
        static $link = null;
        if ($link == null) {
            $link = mysqli_connect("127.0.0.1", "root", "root", "test");
            if (!$link) {
                $link = null;
                $serv->finish("ER:" . mysqli_error($link));
                return;
            }
        }
        $result = $link->query($sql);
        if (!$result) {
            $serv->finish("ER:" . mysqli_error($link));
            return;
        }
        $data = $result->fetch_all(MYSQLI_ASSOC);
        $serv->finish("OK:" . serialize($data));
    }

    function my_onFinish($serv, $data)
    {
        echo "AsyncTask Finish:Connect.PID=" . posix_getpid() . PHP_EOL;
    }

    $serv->on('Receive', 'my_onReceive');
    $serv->on('Task', 'my_onTask');
    $serv->on('Finish', 'my_onFinish');
    $serv->start();

---
### Process

* swoole-1.7.2增加了一个进程管理模块，用来替代PHP的pcntl扩展。

* swoole_process提供了基于unixsock的进程间通信，使用很简单只需调用write/read或者push/pop即可

* swoole_process支持重定向标准输入和输出，在子进程内echo不会打印屏幕，而是写入管道，读键盘输入可以重定向为管道读取数据

* swoole_process允许用于fpm/apache的Web请求中

* 配合swoole_event模块，创建的PHP子进程可以异步的事件驱动模式

* swoole_process提供了exec接口，创建的进程可以执行其他程序，与原PHP父进程之间可以方便的通信 

---

### AsyncIO - 异步文件系统IO

* swoole1.6.12后增加了异步文件读写，异步DNS等特性。自此建立了完整的异步并行API。


    // swoole_async_readfile会将文件内容全部复制到内存，所以不能用于大文件的读取
    // 如果要读取超大文件，请使用swoole_async_read函数
    // swoole_async_readfile最大可读取4M的文件，受限于SW_AIO_MAX_FILESIZE宏
    swoole_async_readfile(__DIR__."/server.php", function($filename, $content) {
        echo "$filename: $content";
    });

    //swoole_async_writefile最大可写入4M的文件
    swoole_async_writefile('test.log', $file_content, function($filename) {
        echo "wirte ok.\n";
    });
    // 此函数与swoole_async_readfile不同，它是分段读取，可以用于读取超大文件。每次只读$trunk_size个字节，不会占用太多内存。
    bool swoole_async_read(string $filename, mixed $callback, int $size = 8192, int $offset = 0);
    //异步写文件，与swoole_async_writefile不同，write是分段读写的。不需要一次性将要写的内容放到内存里，所以只占用少量内存。swoole_async_write通过传入的offset参数来确定写入的位置。
    bool swoole_async_write(string $filename, string $content, int $offset = -1, mixed $callback = NULL);
    // 将域名解析为IP地址。调用此函数是非阻塞的，调用会立即返回。
    swoole_async_dns_lookup("www.baidu.com", function($host, $ip){
        echo "{$host} : {$ip}\n";
    });

---

### AsyncIO - EventLoop

* 除了异步Server/Client库之外，Swoole扩展还提供了直接操作底层epoll/kqueue事件循环的接口。可将其他扩展创建的socket，PHP代码中stream/socket扩展创建的socket等加入到Swoole的EventLoop中。


    $db = new mysqli;
    $db->connect('127.0.0.1', 'root', 'root', 'test');
    $db->query("show tables", MYSQLI_ASYNC);
    
    //swoole_event_add函数用于将一个socket加入到swoole的reactor事件监听中。
    swoole_event_add(swoole_get_mysqli_sock($db), function($db_sock) {
        global $db;
        $res = $db->reap_async_query();
        var_dump($res->fetch_all(MYSQLI_ASSOC));
        // socket处理完成后，从epoll事件中移除socket     
        swoole_event_del(swoole_get_mysqli_sock($db)); 
    });

    $db2 = new mysqli;
    $db2->connect('127.0.0.1', 'root', 'root', 'test');
    $db2->query("show tables", MYSQLI_ASYNC);
    swoole_event_add(swoole_get_mysqli_sock($db2), function($db_sock) {
        global $db2;
        $res = $db2->reap_async_query();
        var_dump($res->fetch_all(MYSQLI_ASSOC));
        // socket处理完成后，从epoll事件中移除socket 
        swoole_event_del(swoole_get_mysqli_sock($db2));
    });
    //swoole_event_add不会阻塞进程，这行代码会顺序执行
    echo "Finish\n";  

---

### Memory - Lock

* swoole1.6.4版本增加了锁的实现。PHP代码中可以很方便地创建一个锁，用来实现数据同步。swoole_lock类支持5种锁的类型：


    - 文件锁 SWOOlE_FILELOCK
    - 读写锁 SWOOLE_RWLOCK
    - 信号量 SWOOLE_SEM
    - 互斥锁 SWOOLE_MUTEX
    - 自旋锁 SWOOlE_SPINLOCK


    $lock = new swoole_lock(SWOOLE_MUTEX);
    echo "[Master]create lock\n";
    $lock->lock();
    if(pcntl_fork() > 0) 
    {
            sleep(1);
            $lock->unlock();
    } 
    else
    {
            echo "[Child] Wait Lock\n";
            $lock->lock();
            echo "[Child] Get Lock\n";
            $lock->unlock();
            exit("[Child] exit\n");
    }
    echo "[Master]release lock\n";
    unset($lock);
    sleep(1);
    echo "[Master]exit\n";

--- 

### Memory - Buffer

* swoole1.7.5提供了一个swoole_buffer类，让PHP开发者可以像C一样直接读写内存，提升程序的性能，又不用担心内存越界。swoole_buffer会检测offset。

* swoole_buffer申请的内存并非共享内存，所以无法在多个进程间被共享


    $buffer = new swoole_buffer(128);
    $buffer->write(0, '中国');
    echo $buffer->read(0, 3);
    $buffer->clear();

---

### Memory - Table

* swoole_table一个基于共享内存和锁实现的超高性能，并发数据结构。用于解决多进程/多线程数据共享和同步加锁问题。

* swoole_table的优势
    - 性能强悍，单线程每秒可读写50万次。8核机器8线程可以支持每秒并发读写400万次
    - 无需加锁，swoole_table内置行锁自选锁，所有操作均是多线程/多进程安全。用户层完全不需要考虑数据同步问题。
    - 支持多进程，swoole_table可以用于多进程之间共享数据


    $table = new swoole_table(1024);
    $table->column('id', swoole_table::TYPE_INT, 4);       //1,2,4,8
    $table->column('name', swoole_table::TYPE_STRING, 64);
    $table->column('num', swoole_table::TYPE_FLOAT);
    $table->create();

    $table->set('1', array('id' => 1, 'name' => 'jigang', 'num' => 3.1415));
    $table->set('2', array('id' => 2, 'name' => "tiger", 'num' => 3.1415));

    $table->get('1');


---

### Memory - Atomic

* swoole_atomic是swoole扩展提供的原子计数操作类，可以方便整数的无锁原子增减。
    - swoole_atomic使用共享内存，可以在不同的进程之间操作计数
    - swoole_atomic基于gcc提供的CPU原子指令，无需加锁
    - swoole_atomic在服务器程序中必须在swoole_server->start前创建才能在Worker进程中使用


    $atomic = new swoole_atomic(123);
    echo $atomic->add(12)."\n";
    echo $atomic->sub(11)."\n";
    echo $atomic->cmpset(122, 999)."\n";
    echo $atomic->cmpset(124, 999)."\n";
    echo $atomic->get()."\n";

---

### More 
* [Swoole 官网](http://www.swoole.com/)
* [Swoole 官方文档](http://wiki.swoole.com/wiki/index/prid-2)
* [Swoole Github](https://github.com/swoole)

---

## Thanks
![swoole team](img/swoole/team.jpg)






