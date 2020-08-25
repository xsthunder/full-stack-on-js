git使用规范 branch命名规范
----
1. branch命名规范
```
feature/<姓名首字母>-<分支创建日期>-<分支内容> // 新增内容
bug/<姓名首字母>-<分支创建日期>-<分支内容> // 修复bug
enhancement/<姓名首字母>-<分支创建日期>-<分支内容> //对框架级别进行改进
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
1. 码云，管理分支，从`master`新建分支，分支名`<branch1>`
2. `git fetch`本地获取远程仓库信息
3. `git checkout <branch1>` 如无意外，该命令将在本地新建分支`<branch1>`，同时跟踪远程分支`<branch1>`
3. 在自己分支下工作，见文档参考1，git基本操作
4. `git push //推送同步本分支`
5. gitee提起`<branch1>`到`dev`分支的pull request，请参考[开发者 提交 Pull Request](https://gitee.com/help/articles/4304#article-header1)
6. 通知项目技术负责人进行代码审查以及合并，定期从`dev`合并到`master`，做版本发布

注，1中不一定从`master`新建分支，5中pull request目的分支不一定`dev`，请联系对应仓库负责人

文档参考
-------
1. 不了解git请先阅读[Pro Git（中文版）](http://git.oschina.net/progit/)，必须阅读[1 起步 - Pro Git](http://git.oschina.net/progit/1-%E8%B5%B7%E6%AD%A5.html)，[2 Git 基础 - Pro Git](http://git.oschina.net/progit/2-Git-%E5%9F%BA%E7%A1%80.html)，其他选读。**没有git基础知识请勿向远程仓库提交任何东西！**
