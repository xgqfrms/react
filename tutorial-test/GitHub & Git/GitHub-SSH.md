# GitHub SSH

[Categories / SSH](https://help.github.com/categories/ssh/)

[SSH / Generating an SSH key](https://help.github.com/articles/generating-an-ssh-key/)

> SSH密钥是一个方法来识别值得信赖的电脑不涉及密码。

您可以生成一个SSH密钥，并按照本节所述的方法将公共密钥添加到您的GitHub帐户。

## Checking for existing SSH keys

```sh
>$ ls -al ~/.ssh
# equal
>$ cd ~/.ssh
>$ ls -al
```

## Generating a new SSH key and adding it to the ssh-agent

```sh
# Generating a new SSH key
>$ ssh-keygen -t rsa -b 4096 -C "xgqfrms@gmail.com"
# or simple
>$ ssh-keygen -t rsa -C "xgqfrms@gmail.com"

# id_rsa path: /c/Users/xray/.ssh/webgeeker/id_rsa

# 复制SSH密钥到剪贴板。
>$ clip < ~/.ssh/id_rsa.pub
>$ clip < ~/.ssh/webgeeker/id_rsa.pub
# or
>$ cd ~/.ssh/webgeeker
>$ clip < id_rsa.pub

# Adding your SSH key to the ssh-agent
## 打开的ssh-agent：

### If you are using Git Bash
>$ eval "$(ssh-agent -s)"
### If you are using another terminal prompt, such as Git for Windows, 
>$ eval $(ssh-agent -s)

# 添加您的SSH密钥到ssh-agent
>$ ssh-add ~/.ssh/id_rsa
>$ ssh-add ~/.ssh/webgeeker/id_rsa
# 添加SSH密钥到您的GitHub帐户。
```

## Adding a new SSH key to your GitHub account

```sh
# 复制SSH密钥到剪贴板。
>$ clip < ~/.ssh/id_rsa.pub
## 提示：如果clip没有工作，你可以找到隐藏的.ssh文件夹中，打开你喜欢的文本编辑器文件，并将其复制到剪贴板。

```

## Testing your SSH connection

```sh
# test your connection
ssh -T git@github.com
```

> 注：上面的例子列出了GitHub的IP地址为192.30.252.1。
当 pinging GitHub 时，你可能会看到一个IP地址范围。
有关更多信息，请参阅“GitHub上使用什么IP地址，我应该列入白名单？”
### ping github.com

```cmd
>$ ping github.com
# 192.30.253.112
```

[SSH / Error: Permission denied (publickey)](https://help.github.com/articles/error-permission-denied-publickey/)

> 一个“Permission denied”错误表示服务器拒绝的连接。

可能有多种原因，其中最常见的例子说明如下。
## Should the sudo command be used with Git?

> 你不应该使用Git的sudo命令。

## Check that you are connecting to the correct server

```sh
# 为了确保您连接到正确的领域，你可以输入以下命令：
>$ ssh -vT git@github.com
```

## Always use the "git" user

```sh
>$ ssh -T git@github.com
```

## Make sure you have a key that is being used

```sh
# If you are using Git Bash
>$ eval "$(ssh-agent -s)"

# If you are using another terminal prompt, such as Git for Windows
>$ eval $(ssh-agent -s)

# 验证是否已生成私钥并加载到SSH。
# If you're using OpenSSH 6.7 or older:
>$ ssh-add -l

# If you're using OpenSSH 6.8 or newer:
>$ ssh-add -l -E md5

## ssh-add命令应打印出数字和字母的长字符串。
## 如果没有显示任何信息，你需要生成一个新的SSH密钥，并将其与GitHub关联。
```

### Getting more details

> 您还可以检查该键正在被用于,通过尝试连接到git@github.com：

## Verify the public key is attached to your account

> 您必须提供您的公钥来GitHub上建立安全连接。

```sh
# 在后台启动SSH代理。
>$ ssh-agent -s

# 查找并记录你的公钥指纹。
## If you're using OpenSSH 6.7 or older:
>$ ssh-add -l

## If you're using OpenSSH 6.8 or newer:
>$ ssh-add -l -E md5

# 比较SSH密钥列表,同从SSH-add命令的输出,
```


[SSH / Working with SSH key passphrases](https://help.github.com/articles/working-with-ssh-key-passphrases/)

> 与SSH密钥口令工作

## Why do I need a passphrase?

## Adding or changing a passphrase

```sh
>$ ssh-keygen -p
```

## Auto-launching ssh-agent on Git for Windows

```sh
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2= agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```


## Using SSH over the HTTPS port

[SSH / Using SSH over the HTTPS port](https://help.github.com/articles/using-ssh-over-the-https-port/)

```sh
# 要测试的SSH HTTPS端口是可能的，这种运行SSH命令：
>$ ssh -T -p 443 git@ssh.github.com
```

### Enabling SSH connections over HTTPS

> 要设置你的ssh配置，编辑 ~/.ssh/config的文件，并加入这一节：

```config
Host github.com
  Hostname ssh.github.com
  Port 443
```

```sh
# You can test that this works by connecting once more to GitHub:
>$ ssh -T git@github.com
```


## id_rsa.pub key

```key
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDOiaQu2L2w+nP1mlLbxMAZQ7d3OHPpkt+6IouyClPc20Y4VDrcZqXh5S0pPNl0UaQtBPgINq1MBR3nC9cQ/vuxPBsi5kCY95ypuzd70Z6PX/+1E5p/JVdhX1UEoLuyR56ieMBHC/uM7uUqmQRG/xHhGIgk+37AMas8rZNtuF2VZIsqaPh8nloHXepdL2f73V0nIxUqfUap6In6kXQusr7VMJ7x3RZDUqurThnRRx31JgXt8JQ8OJEd034T+3XRZVxOv6NYTAT19D2kS9S0/JsooDnB2TMhr3VKIuWNLhhZVy7kFFCPHxFxvjLVKKoZEIJrVoo2k0w13kq86R5PbJogcis54AjykCaRjmhcxqeRrzhmp22zvAVbpvWl9DWpIGQMP8z0ThmWUrJrlkaJ8ir0VWstK3y+ovpJEQikiLFiGjolh7g0UrATlq1/2nZ3rnhnpPlQ+uKQUAxDdnCGGoVzNCAmAXGlXryRGaPM+QmnhSCkGjl6C9NvkNY6I+eZnr8gY2K76kai3Sadu+Q5znGjL3MjUM7ZKcQQ2e0EdIY5yA2MO65bTd6hVv6G6ainixb3X0fLCJZ0chXXf9UjSQjY01IwunqXcuRFvyWHidZm5xkV9ezyVah3dbA5ICBZhrC5nyVD+1SIn0uOIsIoZHt6p+CGIPT6D5pYqLghBtdP7Q== xgqfrms@gmail.com
```

## git clone

```sh
# webgeeker
>$ git clone git@github.com:xgqfrms-GitHub/webgeeker.git
```

## 空格: git add . !== git add.