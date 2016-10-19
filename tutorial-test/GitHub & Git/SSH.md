# SSH

## open ~/.ssh check id_rsa

```sh
>$ ls -al ~/.ssh
# equal
>$ cd ~/.ssh
>$ ls -al
```


## create id_rsa

```sh
>$ ssh-keygen -t rsa -C "xgqfrms@gmail.com"
# -b 4096
>$ ssh-keygen -t rsa -b 4096 -C "xgqfrms@gmail.com"
```

## add id_rsa.pub to github repo

```sh
# 复制SSH密钥到剪贴板。
>$ clip < ~/.ssh/id_rsa.pub
## 提示：如果clip没有工作，你可以找到隐藏的.ssh文件夹中，打开你喜欢的文本编辑器文件，并将其复制到剪贴板。

```

## test

```sh
>$ ssh -T git@github.com
```

## clone git repo

```sh
# webgeeker
>$ git clone git@github.com:xgqfrms-GitHub/webgeeker.git
```

## push test

```sh
>$ git status
>$ git add.
>$ git commit -m "commit info"
>$ git push
# master(origin) / gh-pages
```

## pull test

```sh
>$ git status
>$ git pull
# master(origin) / gh-pages
```


