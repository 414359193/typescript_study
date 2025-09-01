 - 安装ts pnpm install -g typescript  -g是全局 -D开发时依赖 不加就是运行时依赖 如ts 只在打代码时用到
 - tsc <文件名称>  编译ts文件 为js文件 
 - tsc  <文件名> -w 自动监听ts文件
 - tsc --init 初始化一个tsconfig文件 配置

 ```json
{
    "rootDir": "./src",//ts文件目录
    "outDir": "./dist",//编译输出目录
}
```
- 变量类型声明 ：初始值推断、显式声明


------
git 学习

1. 初始化命令 git init
2.检测文件状态 git status 可以查看当前文件 状态
 - 红色 新增 / 修改  git add 文件名 . 添加为git管理
 -绿色 git 已经管理 但未生成版本 git commit -m '描述信息'  提交为版本
3.git log 查看版本记录 
4.git commit -m  '描述信息' 提交为版本
5.版本回退 git reset --hard 版本号 
6. git reflog 查看回退后覆盖的版本

7. git branch 目前所处分支 

8. git brench [分支名] 创建一个分支
 
9.  git checkout [分支名] 切换分支

10. 切换到master分支 git merge [分支名] 合并分支
11. 删除分支 git branch -d [分支名]
12. 给远程仓库起别名  git remote add 【origin】 远程仓库地址 
13. git push -u origin 分支名 将本地分支 推送到远程仓库

14. git clone 地址 将远程仓库克隆到本地
15. git pull origin dev 将远程代码拉取

16. 修改远程仓库地址 git remote set-url [origin] git地址