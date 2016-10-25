# Babel Tutorial

[API : How to use the Node.js API.](https://babeljs.io/docs/usage/api/)  

[Options : Options for babel transpiling.](http://babeljs.io/docs/usage/options/)  

[AST : ?](https://astexplorer.net/)  

[ES2015 preset : All you need to compile ES2015 to ES5](https://babeljs.io/docs/plugins/preset-es2015/)  

********************************************************************************************

[CLI : How to use the CLI tools.](https://babeljs.io/docs/usage/cli/)  

********************************************************************************************

[ES2015 preset : All you need to compile ES2015 to ES5](https://babeljs.io/docs/plugins/preset-es2015/)  

===  
===  

[npm : babel-preset-es2015 ](https://www.npmjs.com/package/babel-preset-es2015)  

```sh
$ babel index.js --presets es2015 

``` 
[Babel 用户手册](https://github.com/xgqfrms-GitHub/webgeeker/blob/gh-pages/Babel/Babel-Hand-Book/user-handbook.md)  

===  
===  

[babel-handbook](https://github.com/thejameskyle/babel-handbook)

##  A guided handbook on how to use Babel and how to create plugins for Babel.

=== 
=== 


## babel.transform(code, [options])

```js
var babel = require("babel-core");

// babel.transform("code();", options);
// => { code, map, ast }

var result = babel.transform("code();", options);

result.code;
result.map;
result.ast;

``` 

## babel.transformFile(filename, [options], callback)

```js
var babel = require("babel-core");

// babel.transformFile(filename, [options], callback)
// // => { code, map, ast }

babel.transformFile("filename.js", options, function (err, result) {
    result;
});

``` 

## babel.transformFileSync(filename, [options])

```js
var babel = require("babel-core");

// babel.transformFileSync(filename, [options]) 
// => { code, map, ast }

babel.transformFileSync("filename.js", options).code;

```

# babel.transformFromAst(ast, [code], [options])

```js
var babel = require("babel-core");

// babel.transformFromAst(ast, [code], [options])
// ?

const code = "if (true) return;";

const ast = babylon.parse(code, { allowReturnOutsideFunction: true });

const { code, map, ast } = babel.transformFromAst(ast, code, options);

```



