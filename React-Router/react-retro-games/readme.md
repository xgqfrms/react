# react-retro-games






https://github.com/samuxyz/react-retrogames

https://scotch.io/tutorials/retrogames-library-with-node-react-and-redux-1-server-api-and-react-frontend

https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm

http://mongoosejs.com/

http://mongoosejs.com/docs/index.html



First be sure you have MongoDB and Node.js installed.


$ npm install mongoose



```
# https://scotch.io/tutorials/retrogames-library-with-node-react-and-redux-1-server-api-and-react-frontend

yarn init

yarn add express mongoose morgan body-parser

yarn add babel-core babel-cli babel-preset-es2015 --dev


"scripts": {
    "api": "babel-node server.js"
}


yarn api


touch .babelrc

{
    "presets": ["es2015"]
}

# https://babeljs.io/docs/usage/babelrc/


touch server.js


# https://www.getpostman.com/


yarn api


# https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html

# http://survivejs.com/

yarn add webpack webpack-dev-server webpack-merge webpack-validator --dev


yarn add babel-preset-react babel-loader react-hot-loader style-loader css-loader file-loader --dev

yarn add react-hot-loader@3.0.0-beta.6 --dev




"start": "NODE_ENV=development webpack-dev-server",
"build": "NODE_ENV=build webpack"




# https://github.com/samuxyz/react-retrogames

yarn add react react-dom react-router

# https://github.com/ReactTraining/react-router/blob/master/docs/API.md#hashhistory


# https://github.com/facebook/react/blob/master/CHANGELOG.md#1530-july-29-2016

# React 15.3.0引入了PureComponent来替换不能与ES6类一起使用的pure-render-mixin，所以我们可以实际扩展它的无状态组件。





yarn api


yarn start

yarn build

http://localhost:8080



# https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai


# https://pub.scotch.io/@samuxyz




``` 










# 我希望本教程阐明配置真正做什么以及为什么我们需要它们。


```
# https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

# https://github.com/andela-jwarugu/react-startpack
# https://github.com/joykare/react-startpack


yarn init

yarn add webpack webpack-dev-server path

touch webpack.config.js

yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev

touch .babelrc


$ mkdir client
$ cd client
$ touch index.js
$ touch index.html
$ cd .. 

$ mkdir client & cd client
$ touch index.js index.html
$ cd .. 


$ mkdir client & cd client & touch index.js index.html & cd ..
$ mkdir client & cd client & touch index.js & touch index.html & cd ..



# html-webpack-plugin



yarn add html-webpack-plugin



const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})

plugins: [HtmlWebpackPluginConfig]



"scripts": {
    "start": "webpack-dev-server"
},

yarn start

yarn start -o ??? 
yarn start --open ??? 

# http://localhost:8080/


yarn add react react-dom



$ cd client
$ mkdir components 
$ cd components
$ touch App.jsx
$ cd ../..

$ cd client & mkdir components & cd components &  touch App.jsx & cd ../..



yarn start






``` 

https://gist.github.com/xgqfrms-GitHub/2c085400d92808c2ad342e5403a597ee






https://github.com/samuxyz


https://scotch.io/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger

https://github.com/samuxyz/movie-collection

https://github.com/swagger-api
http://swagger.io/

Swagger是一个强大的开源框架，由大型工具生态系统支持，可帮助您设计，构建，记录和使用RESTful API。

https://github.com/swagger-api/swagger-ui



https://github.com/samuxyz/bookstore


















