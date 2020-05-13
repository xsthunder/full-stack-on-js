---
marp: true
---

# full stack on js with vue + koa2

曾健骏
github@xsthunder/full-stack-on-js

---

目的
--------
是：
1. js全栈技术点
2. 技术前瞻&带货

不是：
1. js教程
2. vue or koa2教程

---

vue：数据绑定
-------

## 想法

逻辑代码和视图交互数据，统一存放在this.data

vue监听this.data变化，自动更新视图。

逻辑和视图分开，vue是桥梁。

## 示例

v-model 双向数据绑定
`:`，单向数据绑定
`@<action>="fuc"`绑定事件，事件放在this.methods中

提示：前台可以通过桩模块暂时代替后台，从而不被后台的进度阻塞。

---

vue 模块化 + 打包
-------

## 示例

1. 两个组件，两个文件

2. 引入外部依赖，开源库[Ant Design Vue](https://www.antdv.com/docs/vue/introduce-cn/)

3. [Yarn](https://yarnpkg.com/)   [npm](https://www.npmjs.com/)

4. 打包发布`yarn build` 即 工程化

---

后台：koa2
-------
[Koa - next generation web framework for node.js](https://koajs.com/)
[基於Nodejs的Koa2基本教學 - 倫斯的技術隨筆 - Medium](https://medium.com/@rorast.power.game/%E5%9F%BA%E6%96%BCnodejs%E7%9A%84koa2%E5%9F%BA%E6%9C%AC%E6%95%99%E5%AD%B8-67d1ce0bb59a)
1. 异步，非阻塞，基于promise
2. 洋葱模型


---
后台：koa2 洋葱模型
-------

![](2020-05-13-13-42-25.png) ![height:550](2020-05-13-13-44-05.png)

-----

前端常见问题
------
保存过于频繁：Debounce
数据竞争：throttle
参考[Throttling and Debouncing in JavaScript - codeburst](https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf)
solve this once for all？

---


Rxjs
------
Rxjs统一处理数据流，28定律，看一部分即可
[RxJS - merge](https://rxjs-dev.firebaseapp.com/api/index/function/merge)
![h:500](rxjs-merge.png)

---

RxJS debounceTime
------
[RxJS - debounceTime](https://rxjs-dev.firebaseapp.com/api/operators/debounceTime)

![](rxjs-debounce-time.png)


---

RxJS - throttleTime
-------
[RxJS - throttleTime](https://rxjs-dev.firebaseapp.com/api/operators/throttleTime)

![](rxjs-throttle-time.png)

---

其他问题
-----
前后台的功能划线
前台可以负责第一次检查，但是后台必须再检查一次。（安全考虑）
uid的处理: 使用uuid

---

前端进阶：
------
[组件生命周期 — Vue.js](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)
数据什么时候获取？
[What is Vuex? | Vuex](https://vuex.vuejs.org/)
SEO[Vue.js 服务器端渲染指南 | Vue SSR 指南](https://ssr.vuejs.org/zh/)

---

其他：
-------
引入typescript
项目使用framework
[Home · koajs/koa Wiki](https://github.k/koajs/koa/wiki#frameworks)
[vueComponent/ant-design-vue-awesome: ant-design-vue-awesome](https://github.com/vueComponent/ant-design-vue-awesome)

### 示例

[Egg.js 是什么? - 为企业级框架和应用而生](https://eggjs.org/zh-cn/intro/index.html)
[vueComponent/ant-design-vue-pro: 👨🏻‍💻👩🏻‍💻 Use Ant Design Vue like a Pro!](https://github.com/vueComponent/ant-design-vue-pro)

---

如何设计后端api和鉴权
-----
参考优秀项目的API设计
[GitHub API v3 | GitHub Developer Guide](https://developer.github.com/v3/)
[Authentication](https://developer.github.com/v3/#authentication)
postman作为前后台的桥梁

---

技术选型
------
**技术选型**，请教senior，综合考虑人员，性能，周期

### 示例
1. 前端框架:[vueComponent/ant-design-vue-pro: 👨🏻‍💻👩🏻‍💻 Use Ant Design Vue like a Pro!](https://github.com/vueComponent/ant-design-vue-pro)
    1. 不使用vuex
    2. ……
1. 后端框架：[Egg.js 是什么? - 为企业级框架和应用而生](https://eggjs.org/zh-cn/intro/index.html)
1. 接口格式：接口的数据协议推荐使用form-data，后端向前端以可调试的postman集合形式交付接口实现样例。
1. 用户标识鉴权：用户标识用header中带token
1. 接口设计参照：github restful设计https://developer.github.com/v3/
1. git的使用规范

---

git使用规范 branch命名规范
----
1. branch命名规范
```
feature/<姓名首字母>-<分支创建日期>-<分支内容>  // 新增内容
bug/<姓名首字母>-<分支创建日期>-<分支内容>   // 修复bug
enhancement/<姓名首字母>-<分支创建日期>-<分支内容>  //对框架级别进行改进
```
2. pull request 后该分支应该不再使用，创建新分支
3. 不好命名的修改，如一些细节的修改，内容各自从alpha1.0开始命名，每一个新分支递增末尾递增1，如下
```
feature/zjj-04-13-alpha1.0
feature/zjj-04-14-alpha1.1
feature/zjj-04-14-alpha1.2
feature/zjj-04-15-alpha1.3
feature/zjj-04-15-alpha1.4
feature/zjj-04-15-alpha1.5
```

---
 
git使用规范 分支创建使用流程
----
1. 码云，管理分支，从master新建分支，分支名`<branch1>`
2. 本地获取远程仓库信息`git fetch`
3.  `git checkout <branch1>` 新建本地分支`<branch1>`，同时跟踪远程分支`<branch1>`
3. 在自己分支下工作
4. `git push //推送同步本分支`
5. 提起目标到`dev`分支的pull request
6. 定期从`dev`合并到`master`，做版本发布

