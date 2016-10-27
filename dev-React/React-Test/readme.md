# React Test

[mocha + react](https://egghead.io/courses/react-testing-cookbook)


## part free

https://egghead.io/courses/react-testing-cookbook
https://egghead.io/courses/react-native-fundamentals
https://egghead.io/courses/react-flux-architecture-es6


## all free

https://egghead.io/courses/building-react-applications-with-idiomatic-redux

https://egghead.io/courses/getting-started-with-redux

https://egghead.io/courses/react-fundamentals

https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx

## Mocha 

[https://mochajs.org/](https://mochajs.org/)

```sh
$ npm install --save react react-dom 

$ npm install --save-dev mocha expect react-addons-test-utils

$ npm install --save-dev babel babel-preset-es2015 babel-preset-react babel-preset-stage-2 

``` 

```json
"scripts": {
    "test": "mocha './src/**/*.spec.js' --compilers js:babel-core/register"
  },
``` 

## test js(empty.spec.js)
```js
import expect form 'expect';

describe('empty', () => {
    it('should work', () => {
        expect(true).toEqual(true);
    });
});

// $ npm test


``` 

## test

```sh
$ npm test

``` 


## cdn js

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.1.2/mocha.js" integrity="sha256-N5gSz/06g+3w7sbdmJsIj5yFhqIA1YTWWFSZ4emoY80=" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.1.2/mocha.css" integrity="sha256-XxZgFmkmXZlR6jVPH+k+HULjy6Lc2IadEc+Ph/KINXk=" crossorigin="anonymous" />

``` 






