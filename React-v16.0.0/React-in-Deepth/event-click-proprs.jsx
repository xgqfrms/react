// class props & this.props.onClickFunction

class PropsTest extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        // need this
        return (
            <div>
                {/* 
                    // OK
                    <button onClick={this.props.onClickFunction} >
                    <button onClick={() => this.props.onClickFunction()} >
                    // Error
                    <button onClick={this.props.onClickFunction()} >
                */}
                <button onClick={() => this.props.onClickFunction()} >
                    `this` Add counter
                </button>
                <p>
                    this state is 
                    <span 
                        style={{color: "#0ff", fontSize: "32px"}}
                        >
                        {this.props.counter}
                    </span>
                </p>
            </div>
        );
    };
};

// function props & no need this

// 无状态组件，函数组件

const Test = (props) =>{
    return (
        <div>
            <button onClick={props.onClickFunction} >
                Add `props` counter
            </button>
            <p
                style={{color: "#0ff", fontSize: "32px"}}
                >
                {props.counter}
            </p>
        </div>
    );
};

// this.setState((revState, props) => {})
// https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous

// 有状态组件，React.Component 子类组件

class App extends React.Component{
    state = {
        counter: 1
    };
    addCounter = (e) => {
        console.log(`counter`, this.state.counter);
        console.log(`e =`, e);
        this.setState(
          (prevState, props) => (
              {
                  counter: prevState.counter + 1
              }
          )
        );
        // 状态更新可能是异步的
        setTimeout(() => {
        		console.log(`counter`, this.state.counter);
        });
    };
    render(){
        // onClickFunction={this.addCounter} , 
        // 不可以在父组件上直接调用父组件自身的方法来修改state，
        // 只可以方法通过props传递给子组件，在子组件上调用修改state的方法
        /* 
        在父组件上直接调用父组件自身的方法来修改 state，调用的方式不对！() => { return ???;} 
        */
        return(
            <div>
                <PropsTest 
                    onClickFunction={this.addCounter}
                    counter={this.state.counter}
                    />
                <Test 
                    onClickFunction={this.addCounter}
                    counter={this.state.counter}
                    />
            </div>
        );
    }
}

// 字符串组件，变量组件, element 元素

// https://facebook.github.io/react/docs/rendering-elements.html#rendering-an-element-into-the-dom

const element = <h1>Hello, world</h1>;


export default App;

const props = {
    name: "xgqfrms",
    age: 17
};

ReactDOM.render(
    <div>
        <App {...props}/>
    </div>
    , mountNode
);
