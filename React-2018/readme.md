# React-2018

https://github.com/xgqfrms/React/issues/4


```jsx
    //

class SayHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello!'
        };
        // constructor bind(this)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        alert(this.state.message);
    }
    // WARNING: this syntax is experimental! Using an arrow here binds the method:
    // ES7 bind(this)
    ES7_handleClick = () => {
        alert(this.state.message);
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    ES6 constructor
                </button>
                {/*ES6 bind(this) onClick={(e) => this.handleClick(e)} */}
                <button onClick={() => this.handleClick()}>
                    ES6 Arrow Function
                </button>
                <button onClick={this.ES7_handleClick}>
                    ES7 class properties
                </button>
                <section data-box="section">...Todo</section>
            </div>
        );
    }
}

const app = `mountNode`;

// ReactDOM.render(component, app_container[, callback])
const callback_func = (e) => {
    // console.log(`e = `, e);
    // let box = document.querySelector(`[data-box="section"]`);
    // box.innerHTML = `e.target.dataset: ${e.target.dataset}`;
};

ReactDOM.render(<SayHello />, mountNode, callback_func);

```

## React refs

> refs & DOM

![image](https://user-images.githubusercontent.com/18028768/40090655-bd407e10-58e5-11e8-828c-0f26949bb8b1.png)

> refs & callback
![image](https://user-images.githubusercontent.com/18028768/40090688-0517eb1a-58e6-11e8-9043-40c1cf24093c.png)

> refs & components & ReactDOM.findDOMNode()

![image](https://user-images.githubusercontent.com/18028768/40090779-7ea38d5e-58e6-11e8-9a7b-109e4e797eb4.png)

> this.refs & components.refs

![image](https://user-images.githubusercontent.com/18028768/40090853-f5d3379e-58e6-11e8-9ad0-a83a4b1e90ba.png)


#  React `refs` all in one 

https://jscomplete.com/repl/

```jsx

"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright  React Refs
 * @description
 * @augments
 * @example
 *
 */

import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


class ReactInputDOM extends React.Component {
    render(props) {
        return (
            <div data-text="test">
                <input type="text" onChange={this.props.handleInputDOM} />
                {/* <input type="text" ref="c" onChange={this.props.handleInputDOM} /> */}
                <code>{this.props.message}</code>
            </div>
        );
    }
}

class ReactInput extends React.Component {
    render(props) {
        return (
            <div>
                <input type="text" ref="d" onChange={this.props.handleInput} />
                {/* <input type="text" ref="input" onChange={this.props.handleInput} /> */}
                <code>{this.props.message}</code>
            </div>
        );
    }
}

class ReactRefs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputA: "aaa",
            inputB: "bbb",
            inputC: "ccc",
            inputD: "ddd",
        };
        this.updateValueA = this.updateValueA.bind(this);
        this.updateValueB = this.updateValueB.bind(this);
        this.handleInputDOM = this.handleInputDOM.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    updateValueA(e) {
        this.setState({
            // inputA: this.refs.a.value,
            inputA: e.target.value,
            // e.target === this.refs.a
        });
    }
    updateValueB() {
        this.setState({
            inputB: this.refs.b.value,
            // this.refs.b
        });
    }
    handleInputDOM() {
        let value = ReactDOM.findDOMNode(this.c).firstChild.value;
        // let value = ReactDOM.findDOMNode(this.c).dataset.text;
        this.setState({
            inputC: value,
            // inputC: this.refs.c.value,
            // this.refs.c
        });
    }
    handleInput() {
        this.setState({
            inputD: this.d.refs.d.value,
            // inputD: this.d.refs.input.value,
            // this.d === components (ReactInput)
            // d === refs.d
        });
    }
    render() {
        return (
            <section>
                <div>
                    <input type="text" ref="a" onChange={(e) => this.updateValueA(e)} />
                    <code>{this.state.inputA}</code>
                </div>
                <div>
                    <input type="text" ref="b" onChange={this.updateValueB} />
                    <code>{this.state.inputB}</code>
                </div>
                <ReactInputDOM
                    ref={dom_node => this.c = dom_node}
                    handleInputDOM={this.handleInputDOM}
                    message={this.state.inputC}
                />
                <ReactInput
                    ref={component => this.d = component}
                    handleInput={this.handleInput}
                    message={this.state.inputD}
                />
                {/* onChange={this.handleInput} */}
            </section>
        );
    }
}

ReactRefs.defaultProps = {
    name: "xgqfrms",
};


ReactRefs.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    infos: PropTypes.object,
    titles: PropTypes.array,
    isHuman: PropTypes.bool,
    callback:  PropTypes.func,
    uniqueSymbol:PropTypes.symbol,
    optionalNode: PropTypes.node,
    optionalElement: PropTypes.element,
    // children: PropTypes.element.isRequired,
};

export {ReactInput, ReactRefs};
export default ReactRefs;


/*

// test

const app = `mountNode`;
// string !== element/DOM node
const mountNode = document.querySelector(`#app`);
// <div id="mountNode" class="mountNode"></div>

*/

const callback_func = () => {
    alert(`If the optional callback is provided, it will be executed after the component is rendered or updated.`);
};

// ReactDOM.render(component, app_container[, callback])
ReactDOM.render(<ReactRefs />, mountNode, callback_func);

/*

https://reactjs.org/docs/react-dom.html#render

> If the optional callback is provided, it will be executed after the component is rendered or updated.

*/

```



