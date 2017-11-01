# GiT 操作命令 所有操作都需要在git命令框下执行
    

  # 获取远程仓库：
    git clone https://github.com/leizp/JiaPu.git
  
  # 本地创建分支
    git checkout -b "分支名"
  
  # 查看分支
    git branch
  
  # 切换分支
    git checkout "分支名"
  
  # 提交本地
    git add "文件名"
    git commit -m "备注说明"
  
  # 查看状态
    git status
  
  # 查看远程仓库
    git remote -v
  
  # 从远程获取最新版本到本地
    git fetch origin "分知名"
  
  #比较本地的仓库和远程参考的区别
    git log -p master.. origin/master // master --分支名
  
  #把远程下载下来的代码合并到本地仓库，远程的和本地的合并
    git merge origin/master // master --分支名

  #比较本地的仓库和远程参考的区别
    git diff temp
  
  #合并temp分支到master分支
    git merge temp

  #如果不想要temp分支了，可以删除此分支
    git branch -d temp
