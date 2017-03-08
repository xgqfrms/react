# error




## cannot read property 'keys' of undefined react

new version error : babel-core/6.1.19/browser.min.js



old version ok : babel-core@5.8.38/browser.min.js


> need a web server




nothing to show with no error : react/0.13.3/JSXTransformer.js



react/15.4.2/react.min.js

react/15.4.2/react-dom.min.js





> no match the version ???

react/0.13.3/JSXTransformer.js

https://cdnjs.com/libraries/react/0.13.3


<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js" integrity="sha256-MkTacBvNGO5pU06MeUchxYJwIK/4JrIGyEeINOmKLkM=" crossorigin="anonymous"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min.js" integrity="sha256-qcq80WTo5JXChoVZHH0uTZyrlaja/xxSq/m+Ih//108=" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react-with-addons.min.js" integrity="sha256-qihJX7SHYrD43RtzvZ3QsyVicFUR9sYLK/VNabsXvzc=" crossorigin="anonymous"></script>



babel-standalone



https://github.com/babel/babel/issues/2836

https://github.com/babel/babel/issues/2987

https://babeljs.io/blog/2016/12/07/the-state-of-babel

https://github.com/babel/babel/issues/4130



https://babeljs.io/docs/setup/

https://babeljs.io/docs/setup/#browser

babel-standalone

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>


https://github.com/babel/babel-standalone







http://stackoverflow.com/questions/36672007/reactjs-cannot-read-property-keys-of-undefined


Use `React.createClass` not `ReactDOM.createClass` and wrap multiple lines of `html` in parenthesis




http://stackoverflow.com/questions/38194585/reactjs-browser-cannot-read-property-keys-of-undefined


<script src="https://cdn.bootcss.com/babel-core/6.1.19/browser.min.js"></script>

=>

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>



http://stackoverflow.com/questions/36632149/react-js-cannot-read-property-keys-of-undefined

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.29/browser.js"></script>


ReactDOM.render(<HelloWorld/>, document.body);

to

React.render(<HelloWorld/>, document.body);








