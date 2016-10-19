# SSH

## 01 open ~/.ssh check id_rsa

```sh
>$ ls -al ~/.ssh
# equal
>$ cd ~/.ssh
>$ ls -al
```

## 02 create id_rsa

```sh
>$ ssh-keygen -t rsa -C "xgqfrms@gmail.com"
# -b 4096
>$ ssh-keygen -t rsa -b 4096 -C "xgqfrms@gmail.com"
```

## 03 Adding your SSH key to the ssh-agent

```sh
# 打开的ssh-agent：
## If you are using Git Bash
>$ eval "$(ssh-agent -s)"

## If you are using another terminal prompt, such as Git for Windows, 
>$ eval $(ssh-agent -s)

# 添加您的SSH密钥到ssh-agent
>$ ssh-add ~/.ssh/id_rsa
>$ ssh-add ~/.ssh/webgeeker/id_rsa
```

## 04 添加SSH密钥到您的GitHub帐户

```sh
# 复制SSH密钥到剪贴板。
>$ clip < ~/.ssh/id_rsa.pub
## 提示：如果clip没有工作，你可以找到隐藏的.ssh文件夹中，打开你喜欢的文本编辑器文件，并将其复制到剪贴板。

```

## 05 connect test

```sh
>$ ssh -T git@github.com
```

## 06 clone git repo

```sh
# webgeeker
>$ git clone git@github.com:xgqfrms-GitHub/webgeeker.git
```

## 07 push test

```sh
>$ git status
# 空格: git add . !== git add.
>$ git add .
>$ git commit -m "commit info"
>$ git push
# master(origin) / gh-pages
```

## 08 pull test

```sh
>$ git status
>$ git pull
# master(origin) / gh-pages
```


