# npm publish


https://docs.npmjs.com/cli/publish


npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>]

Publishes '.' if no argument supplied

Sets tag 'latest' if no --tag specified


https://docs.npmjs.com/misc/scope



npm publish --tag stable


npm publish --tag alpha

npm publish --tag beta

npm publish


<folder>: A folder containing a package.json file

<tarball>: A url or file path to a gzipped tar archive containing a single folder with a package.json file inside.

[--tag <tag>] Registers the published package with the given tag, such that npm install <name>@<tag> will install this version. By default, npm publish updates and npm install installs the latest tag. See npm-dist-tag for details about tags.

[--access <public|restricted>] Tells the registry whether this package should be published as public or restricted. Only applies to scoped packages, which default to restricted. If you don't have a paid account, you must publish with --access public to publish scoped packages.






将包发布到注册表，以便可以按名称安装。如果没有本地.gitignore或.npmignore文件存在，则包括目录中的所有文件。

如果两个文件存在，一个文件被.gitignore忽略，而不被.npmignore忽略，那么它将被包括。


https://docs.npmjs.com/misc/developers





https://docs.npmjs.com/cli/dist-tag



stable, beta, dev, canary


https://docs.npmjs.com/misc/scope








https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-publishing-to-npm


https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-releasing-a-new-version-to-npm



## websockets-test

https://runkit.com/npm/websockets-test

https://npmjs.com/package/websockets-test



G:\wwwRoot\Node.js\WebRTC\websockets











## ng2seed


G:\wwwRoot\ng2seed


npm publish --tag stable





https://github.com/xgqfrms/ng2seed

```
  "repository": {
    "type": "git",
    "url": "git+https://github.com/xgqfrms/ng2seed.git"
  },
  "keywords": [
    "npm"
  ],
  "author": "xgqfrms",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/xgqfrms/ng2seed/issues"
  },
  "homepage": "https://github.com/xgqfrms/ng2seed#readme",
```





Collaborators Push access to the repository


Transfer repository



A Transfer repository B

===

B copy A & A deletee A







ng2-seed

🎅❄🎄🎁🔀⛄🔔ng2seed: All guides and cookbooks have at least these core files. (app.component.ts, app.module.ts, main.ts )https://angular.io/docs/ts/latest/guide/setup.html




https://github.com/npm/npm/issues




https://github.com/npm/npm/issues/15974





npm publish --tag stable


















npm-publish

package.json

name === ng2-seed
repo name === ng2-seed




package.json name === repo name

https://github.com/xgqfrms/ng2-seed/projects/1




npm init


npm i -S ng2-seed





npm-publish


https://www.npmjs.com/package/ng2-seed



https://www.npmjs.com/~xgqfrms














