# CSS Modules with React



https://github.com/css-modules/css-modules/blob/master/docs/css-modules-with-react.md


https://github.com/gajus/react-css-modules






```Demo.js

import React from 'react'
import CSSModules from 'react-css-modules'
/* import your css modules styles for the component */
import styles from './Demo.css' 

function Demo( props) {

    const { route } = props

    return (
        <div styleName='demo'>
            <button styleName='button blue'>press me</button>
        </div>
    )
}

export default CSSModules(Demo, styles, {allowMultiple: true} )

``` 



```index.js

import React from 'react'
import ReactDOM from 'react-dom'
import Demo from './components/Demo'

function App(props) {
    return (
        <main>
            <Demo />
        </main>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))


``` 




## CSS Modules with React

https://gist.github.com/xgqfrms-GitHub/16967b1b62afc156bae5162ca459be7e




> import CSSModules & import styles & export default CSSModules(components)

```jsx

import CSSModules from 'react-css-modules'
/* import your css modules styles for the component */
import styles from './Demo.css' 

{/*...*/}

``` 


> export default CSSModules(Demo, styles, {allowMultiple: true} )



```jsx

import components

import Demo from './components/Demo'

``` 


