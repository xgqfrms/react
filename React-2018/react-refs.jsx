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


class ReactInput extends React.Component {
    render(props) {
        return (
            <div>
                <input type="text" ref="c" onChange={this.props.handleInput} />
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
        };
        this.updateValueA = this.updateValueA.bind(this);
        this.updateValueB = this.updateValueB.bind(this);
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
    handleInput() {
        this.setState({
            inputC: this.c.refs.c.value,
            // inputC: this.c.refs.input.value,
            // this.c === components (ReactInput)
            // c === refs.c
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
                <ReactInput
                    ref={component => this.c = component}
                    handleInput={this.handleInput}
                    message={this.state.inputC}
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
