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




