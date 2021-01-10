# starbuck
-------------
## 1 介绍
这个项目是基于 Vue.js + Node.js + mysql + apache 构建的前后端分离的单页面应用。网站采用响应式布局方案，适配 PC 端和移动端，包含商品展示、定位附近门店、登录注册、获取当前用户会员信息与消费记录等功能，较为完整的展现了星巴克官方网站的全貌。

-------------

## 2 技术栈

Vue + Vue-Router + Webpack + ES6 + jQuery + node.js + Bootstrap + Axios + mysql

-------------
## 3 运行
完美运行此项目需要vue，mysql，webpack，apache等
步骤：

1. 把项目文件下的 http 文件夹移动到你 apache 的根目录
2. 我自己的 apache 接口用的8011，如果和我不一样可以在 main.js 中Vue.prototype.$host = 'http://localhost:8011/http'，把8011修改为你自己的 apache 接口即刻。
3. 在本地创建 mysql 数据库，强烈建议使用 Navicat premunm12 可视化工具创建，创建数据库 tsia 再创建表users，再创建id、name、password字段，之后进入 server/db.js 修改为你自己 user(用户名) 和 password (密码)
>注：node.js 用的是 3000 端口，如果冲突请修改为其他端口，修改端口在 main.js 和 server/app.js
4. 下载依赖 npm install
5. 运行node.js node .\src\server\app.js 或者 nodemon .\src\server\app.js
5. 运行项目 npm run serve
