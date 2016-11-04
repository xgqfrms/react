# Node.js upgrade version

## How To Install Node.js with NVM (Node Version Manager)

https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps

```bash
#To install version 0.10.13 (the latest as of this writing) type:

$ nvm install 0.10.13
``` 


http://theholmesoffice.com/node-js-fundamentals-how-to-upgrade-the-node-js-version/



https://github.com/creationix/nvm/blob/master/README.markdown

```md
#Usage

> To download, compile, and install the latest release of node, do this:

$ nvm install node

And then in any new shell just use the installed version:

$ nvm use node

Or you can just run it:

$ nvm run node --version

Or, you can run any arbitrary command in a subshell with the desired version of node:

$ nvm exec 4.2 node --version

You can also get the path to the executable to where it was installed:

$ nvm which 5.0

In place of a version pointer like "0.10" or "5.0" or "4.2.1",  
you can use the following special default aliases with nvm install, nvm use, nvm run, nvm exec, nvm which, etc:

node: this installs the latest version of node
iojs: this installs the latest version of io.js
stable: this alias is deprecated, and only truly applies to node v0.12 and earlier.   
Currently, this is an alias for node.
unstable: this alias points to node v0.11 - the last "unstable" node release,    
since post-1.0, all node versions are stable. (in semver, versions communicate breakage, not stability).
``` 