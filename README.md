grunt-livereload-whf
====================

An easy, general and fast way to setup a live-reload environment. You don't need to hit F5 any more everytime you change your files
不需要在使用 LiveReload 的项目中新建 package.json 和 Gruntfile.js, 该工具跟项目的关系
通过在配置指定即可, 使用非常方便~


准备工作
====================

1. Node.js
2. NPM - Node's package manager
3. Grunt - javascript task runner
4. LiveReload 浏览器插件

配置
====================
1. files.json
该配置文件包含了要监听的项目文件信息, 默认已经添加三种文件 js, css, ftl, 可以在对应的数组中
添加文件信息, path 是文件匹配路径, base是基本路径的名字, 具体值可以在bases查询

2. package.json
包含了该工具的信息。eg: devDependencies指定了工具依赖的模块

3. Gruntfile.js
定义了需要执行的task。这里会读取files.json, 然后构建watch中的files


怎么使用
====================
1. npm install   先下载依赖的模块
2. 修改配置文件
3. grunt server  启动服务

成功会提示：
	Running “watch” task
	Waiting...



