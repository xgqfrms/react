# React Testing (mocha)

[https://egghead.io/lessons/react-testing-running-tests](https://egghead.io/lessons/react-testing-running-tests)

## testing 
```sh
$ npm i -D mocha expect react-addons-test-utils
``` 

## react
```sh
$ npm i -S react react-dom
``` 

## babel
```sh
$ npm i -S babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-2
``` 

## package.json
"script": {
    "test": "mocha './src/**/*.spec.js' --compilers js:babel-core/register"
}


## empty.spec.js
```js
import expect from 'expect';

desccribe('empty', () => {
    it('should work', () => {
        expect(true).toEqual(true);
    });
});
``` 


## testing error path ???

