# yarn add


https://yarnpkg.com/en/docs/managing-dependencies





https://yarnpkg.com/zh-Hans/docs/cli/add





安装包和任何它依赖的包。

添加依赖项

当你想使用另一个包，你要先把它添加到依赖列表。运行 yarn add [package-name] 把它安装到你的项目。

这也会更新你的 package.json 和 yarn.lock ，这样项目上的其他开发者也可以通过运行 yarn 或者 yarn install 来获取同样的依赖。

大部分包会从 npm registry 里安装，用这些包的名字来指定。 比如说，yarn add react 会把 react 包从 npm registry 里安装。

你可以用以下方法指定版本号：

yarn add package-name 来安装 latest 最新版本。
yarn add package-name@1.2.3 会从 registry 里安装这个包的指定版本号。
yarn add package-name@tag 来安装某个 “tag”（比如 beta、next 或者 latest）。
一般来说，包就是一个文件夹里装了代码和一个描述内容的 package.json 文件。你可以用下面一些方法来指定包：

你也可以指定不同路径的包：

yarn add package-name 从 npm registry 里安装包，除非你在 package.json 指定了其它 registry。
yarn add file:/path/to/local/folder 从你的本地文件系统里安装一个包。可以用这个方式来测试你还没发布的包。
yarn add file:/path/to/local/tarball.tgz 安装一个 gzipped 压缩包，这个格式可以用于在发布之前分享你的包。
yarn add <git remote url> 从远程 git repo 里安装一个包。
yarn add <git remote url>#<commit/tag> 会用一个指定的 git commit 或者 git tag 安装 git repo 里的包。
yarn add https://my-project.org/package.tgz 用一个远程 gzipped 压缩包来安装。
注意事项

如果你以前用过类似于 npm 的包管理器，你可能会想如何全局安装依赖。

对于绝大部分包来说，这是个坏习惯，因为它们是隐藏的。 最好本地安装你的依赖，这样它们都是明确的，每用你项目的人都能得到同样的依赖。

如果你想用有 bin 的命令行 CLI 工具，可以在 ./node_modules/.bin 路径里访问。 你也可以用 global 命令：

yarn global add <package...>
命令

yarn add <package...>

这会在依赖列表里安装一个或多个包。

yarn add <package...> [--dev/-D]

用 --dev 或 -D 会在 devDependencies 里安装一个或多个包。

yarn add <package...> [--peer/-P]

用 --peer 或者 -P 会在 peerDependencies 里安装一个或多个包。

yarn add <package...> [--optional/-O]

用 --optional 或者 -O 会在 optionalDependencies 里安装一个或多个包。

yarn add <package...> [--exact/-E]

用 --exact 或者 -E 会安装包的精确版本。 默认是安装包的主要版本里的最新版本。 比如说， yarn add foo@1.2.3 会接受 1.9.1 版，但是 yarn add foo@1.2.3 --exact 只会接受 1.2.3 版。

yarn add <package...> [--tilde/-T]

用 --tilde 或者 -T 来安装包的次要版本里的最新版。 默认是安装包的主要版本里的最新版本。 比如说，yarn add foo@1.2.3 --tilde 会接受 1.2.9，但不接受 1.3.0。









