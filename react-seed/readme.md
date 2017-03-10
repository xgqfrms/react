# react-seed 




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








https://github.com/xgqfrms/react/react-seed.git





https://gist.github.com/xgqfrms-GitHub/462dbc5b16ed7c7cb90942ba340d3fe0/ 












