# mini-git
简化 `git` 命令行操作

# 安装
请确保已安装 [git](https://git-scm.com/) 且正确设置环境变量
```bash
npm i zx -g
git clone https://github.com/litfa/mini-git.git
# 将 mini-git 目录添加到环境变量 并重启终端
```

# 使用
```bash
g [options]

g -h, g -help    # help
g l    # git log
g s    # git status
g a [...]    # git add . | [...]
g c ...    # git commit -m ...
g p [...] # git push [...]
g ...    # git ...Usage: g [options]
```