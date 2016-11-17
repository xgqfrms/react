# Stylus

> https://github.com/xgqfrms-GitHub/webgeeker/tree/gh-pages/Stylus  


# Stylus

> http://stylus-lang.com/  
> http://github.com/stylus/stylus  

EXPRESSIVE，DYNAMIC，ROBUST CSS

**CSS needs a hero!**  
1. omit braces 省略括号  
2. omit semi-colons 省略分号  
3. Keep things DRY    
4. transparent mixins
5. in-language functions
6. it were all optional

```code
Features
Optional colons
Optional semi-colons
Optional commas
Optional braces
Variables
Interpolation
Mixins
Arithmetic
Type coercion
Dynamic importing
Conditionals
Iteration
Nested selectors
Parent referencing
Variable function calls
Lexical scoping
Built-in functions (over 60)
In-language functions
Optional compression
Optional image inlining
Stylus executable
Robust error reporting
Single-line and multi-line comments
CSS literal for those tricky times
Character escaping
TextMate bundle
and more!
``` 





## npm 

https://www.npmjs.com/package/stylus

```sh
# Installation
$ npm install stylus -g

# Basic Usage
## Watch and compile a stylus file from command line with
$ stylus -w style.styl -o style.css
```

## sublime text 3
https://packagecontrol.io/packages/Stylus


ctrl+shift+p



## demo

```code
# css
body {
  font: 12px Helvetica, Arial, sans-serif;
}
a.button {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

# stylus

border-radius()
  -webkit-border-radius: arguments
  -moz-border-radius: arguments
  border-radius: arguments
 
body a
  font: 12px/1.4 "Lucida Grande", Arial, sans-serif
  background: black
  color: #ccc
 
form input
  padding: 5px
  border: 1px solid
  border-radius: 5px
``` 


https://github.com/ufo-github/stylus/tree/dev/Tutorials


![npm i -g stylus.png](npm i -g stylus.png)
![stylus commands.png](stylus commands.png)


