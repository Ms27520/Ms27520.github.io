# **<center>《Linux系统级应用》期末 </center>**

## **实验一：文本编辑器vi的使用**

1. 使用`student`用户登录并进入`student`的家目录。 

    > 输入用户名及密码，登录后默认进入家目录  
    
    或  
    > 登录后

    ```code
    cd ~
    ```

2. 使用`vim`命令新建一个`test01`的文件，并编辑“今天我考试”。

    ```code
    vim test01
    ```

    > 输入`i`或`a`进入文本模式  
    > 输入“今天我考试” 

3. 将此句话使用行复制命令，复制三遍。 
    
    > 按`Esc`进入命令模式  
    > 使用`yy`命令复制光标所在行  
    > 然后按`p`向下粘贴复制的内容

4. 退出并保存。
    
    > 输入`:`进入末行模式，输入`wq`退出并保存

5. 使用追加命令，将今天的日期追加到`test01`文件中，查看`test01`。  

    > 使用`vim`打开`test011`  
    > 输入`:`进入末行模式  
    > 输入`r!date`追加当前时间到下一行  
    > 输入`:`进入末行模式，输入`wq`退出并保存  

    或
    ```code
    echo $(date) >> test01
    ```


## **实验二：用户组管理**

1. 添加一个新用户`xiaoming`并设置密码为`123`。  
    
    ```code
    su -
    useradd xiaoming
    passwd xiaoming
    ```  

2. 添加两个新组，命名：`shiting`和`jiaoxue`。  
   
    ```code
    groupadd shiting
    groupadd jiaoxue
    ```

3. 添加`xiaoming`用户的附加组为`test`。

    ```code
    groupadd test
    usermod -G test xiaoming
    ```

4. 修改`xiaoming`的原生组为`jiaoxue`。

    ```code
    usermod -g jiaoxue xiaoming
    ```

5. 查看`/etc/passwd`下用户`xiaoming`那行信息。

    ```code
    cat /etc/passwd | grep xiaoming
    ```

## **实验三：目录与文件管理（一）**

1. 以`student`用户登录，进入`/home`下用户的家目录。

    > 输入用户名及密码，登录后默认进入家目录  
    
    或 
    > 登录后
    ```code
    cd ~
    ```

2. 查看家目录下的所有文件，是否包含桌面目录（使用`grep`命令和管道符）。
    
    ```code
    ls -a | grep 桌面
    ```

3. 进入桌面目录新建一个`test02`文件，并追加|考生本人的考试信息。

    ```code
    cd 桌面
    cat << EOF > test02
    > 姓名：**
    > 学号：****
    > EOF
    ```
    或

    ```code
    cd 桌面
    echo "姓名：**   学号：****" >> test03
    ```

4. 切换`root`用户，并复制`test02`文件到`/hmoe`目录下（保留文件原始信息）。
    
    ```code
    su -
    cd /home/student/桌面
    cp test02 /home/test02
    ```

5. 删除桌面目录下的`test02`文件。

    ```code
    rm -rf /home/student/桌面/test02
    ```

## **实验四：目录与文件管理（二）**

1. `student`用户登录，在`/home`家目录下创建`test03`文件。

    > 输入用户名密码登录，默认进入家目录

    ```code
    touch test03
    ```

2. 修改`/home/student`目录的访问权限为作者rwx，同组成员r—x，其他人无权限。

    ```code
    chmod 750 test03
    ```

3. 修改`test03`文件的访问权限为作者和同组成员rwx ，其他人无权限。

    ```code
    chmod 770 test03
    ```

4. 新建用户`xiaoming`并添加`xiaoming` 的附加组进`student`。
    
    ```code
    su -
    useradd xiaoming
    groupadd student
    usermod -G student xiaoming
    ```

5. 切换`xiaoming`登录，进入`/home/student`并追加`xiaoming666`到`test03`文件。

    ```code
    su - xiaoming
    cd /home/student
    cat <<EOF> test03
    > xiaoming666
    > EOF
    ```

    或

    ```code
    su - xiaoming
    cd /home/student
    echo "xiaoming666" >> test03
    ```


## **实验五：目录与文件管理（三）**

1. 挂载U盘到默认挂载点`/meida`。

    ```code
    ls /dev/sdb*
    mount -t vfat /dev/sdb1 /media
    ```

2. 将U盘中的`.gz`压缩文件拷贝到`/tmp`目录。

    ```code
    cp /media/*.gz /tmp/*gz
    ```

3. 解压缩`.gz`文件。

    ```code
    gzip -d *.gz
    ```

4. 检查系统中是否已安装了`.gz`包中的安装程序。

    ```code
    rpm -qa | grep '*.gz包中的软件名'
    ```

5. 若未安装，则安装包依赖关系使用`rmp`安装软件。

    ```code
    rpm -i [--force] 软件名
    ```


## **实验六：进程与作业管理**

1. 查看和`httpd`相关的所有进程，显示进程号。

    ```code
    ps -aux | grep "httpd"
    ```

2. 查看`cpu`使用率最高的`5`个进程。

    ```code
    ps -aux | sort -k3nr | head -5
    ```

3. 删除`httpd`或者`cpu`使用率最高的进程。

    ```code
    killall -9 httpd
    pid=$(ps aux|sort -k3nr|head -1|awk '{print $2}');if [ $pid!=0 ];then kill -9 $pid;else "fail";fi
    ```

4. 监控网络`80`端口和`21`端口。

    ```code
    t=$(netstat -tuln|grep -E ':21|:80');if [ "$t" != "" ];then echo "true";else echo "false";fi
    ```


## **实验七：网络配置与下载**

1. 使用`setup+host-only+vmnet1`的组合使用`dhcp`自动获取IP方式上网。

    ```code
    su -
    不会了
    ```

2. 查看本机的网卡基本信息。

    ```code
    ifconfig [设备名]
    ```

3. 重启网卡。

    ```code
    service network restart
    ```
    或
    ```code
    ifconfig 设备名 down
    ifconfig 设备名 up
    ```
    
4. 使用`wget`命令下载`http://mirrors.163.com/centos/6.0/readme`到`student`主目录。

    ```code
    wget -O /home/student/readme http://mirrors.163.com/centos/6.0/readme
    ```

5. 查看下载的文件内容。

    ```code
    cat /home/student/readme
    ```

## **实验八：ACL 权限管理**

1. 新建用户`xiaoming`和`test`组。

    ```code
    useradd xiaoming
    groupadd test
    ```

2. 将`xiaoming`设置附加组进`test`。

    ```code
    usermod -G test xiaoming
    ```

3. 切换`student`用户，设置`/home/student`目录的`shiting` 组ACL权限为rwx。

    ```code
    setfacl -m g:shiting:rwx /home/student
    ```

4. 查看该目录的ACL权限。

    ```code
    ls -l | grep "student"
    ```

    或

    ```code
    getfacl /home/student
    ```
5. 切换`xiaoming`，在`/home/student`目录中新建`test04`文件。

    ```code
    su - xiaoming
    touch /hoem/student/test04
    ```


## **实验九：使用yum 安装配置apache 服务器**

1. `yum`引源配置文件路径。
2. `yum`安装`httpd`文件。
3. 在默认站点目录下编辑`index.html`（h1 标签显示今天linux 考试）。
4. 重启`httpd`服务器并关闭防火墙。
5. 查看本机IP，浏览器显示网页。

## **实验十:编写基本shell 脚本并写入系统定时服务**

1. 创建`tst.sh`文件要求声明变量`a=10`并将`a`的值`*10`后写入`/home/student/answer.txt`。
2. 修改`shell`脚本的执行权限。
3. 测试脚本的运行。
4. 启动`crond`服务。
5. 编写`crontab`事件要求每2分钟执行一次`/home/student/tst.sh`脚本文件。
