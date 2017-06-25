{
    /*

    # reset & ES6 Arrow function `auto binding this`

    > `onClick={(e) => this.handleClick(e)}`

    https://facebook.github.io/react/docs/react-without-es6.html#autobinding

    https://gist.github.com/xgqfrms-gildata/5acc4a357722e9e2636009fbd6846338

    https://jscomplete.com/repl

    */
}


const props = {
    name: "xgqfrms",
    age: 17
};

class PropsTest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
              counter: 1
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.clickReseter = this.clickReseter.bind(this);
    }
    clickHandler(){
        this.setState(
          (prevState) => (
              {
                  counter: prevState.counter + 1
              }
          )
        );
    }
    clickReseter(){
        this.setState(
          (prevState) => (
              {
                  counter: 0
              }
          )
        );
    }
    render() {
        return (
            <div>
                <h1>just props test!</h1>
                <hr/>
                My name is <span style={{color: "blue"}}>{props.name}</span>
                <br/>
                Age:<span style={{color: "#f10dc8"}}>{props.age}</span>
                <hr/>
                <div>
                    <button onClick={this.clickHandler} >Add counter</button>
                    this state is <span style={{color: "#0ff", fontSize: "32px"}}>{this.state.counter}</span>
                    <button onClick={this.clickReseter} >Reset counter</button>
                </div>
            </div>
        );
    };
};


export default PropsTest;

ReactDOM.render(
    <div>
        <PropsTest {...props}/>
    </div>
    , mountNode
);

















const props = {
    name: "xgqfrms",
    age: 17
};

class PropsTest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
              counter: 1
        };
        this.clickHandler = this.clickHandler.bind(this);
        {/*this.clickReseter = this.clickReseter.bind(this);*/}
    }
    clickHandler(){
        this.setState(
          (prevState) => (
              {
                  counter: prevState.counter + 1
              }
          )
        );
    }
    clickReseter(){
        this.setState(
          (prevState) => (
              {
                  counter: 0
              }
          )
        );
    }
    render() {
        return (
            <div>
                <h1>just props test!</h1>
                <hr/>
                My name is <span style={{color: "blue"}}>{props.name}</span>
                <br/>
                Age:<span style={{color: "#f10dc8"}}>{props.age}</span>
                <hr/>
                <div>
                    <button onClick={this.clickHandler} >Add counter</button>
                    this state is <span style={{color: "#0ff", fontSize: "32px"}}>{this.state.counter}</span>
                    <button onClick={(e) => this.clickReseter(e)}>Reset counter</button>
                </div>
            </div>
        );
    };
};


export default PropsTest;

ReactDOM.render(
    <div>
        <PropsTest {...props}/>
    </div>
    , mountNode
);






