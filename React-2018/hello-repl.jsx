
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
const callback_func = () => {
    alert(`If the optional callback is provided, it will be executed after the component is rendered or updated.`);
    // console.log(`e = `, e);
    // let box = document.querySelector(`[data-box="section"]`);
    // box.innerHTML = `e.target.dataset: ${e.target.dataset}`;
};

ReactDOM.render(<SayHello />, mountNode, callback_func);


/*

https://reactjs.org/docs/react-dom.html#render

> If the optional callback is provided, it will be executed after the component is rendered or updated.

*/
