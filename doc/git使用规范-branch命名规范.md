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
1. 码云，管理分支，从master新建分支，分支名`<branch1>`
2. 本地获取远程仓库信息`git fetch`
3. `git checkout <branch1>` 新建本地分支`<branch1>`，同时跟踪远程分支`<branch1>`
3. 在自己分支下工作
4. `git push //推送同步本分支`
5. 提起目标到`dev`分支的pull request
6. 定期从`dev`合并到`master`，做版本发布
