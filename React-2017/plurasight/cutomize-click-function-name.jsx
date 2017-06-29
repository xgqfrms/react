// https://facebook.github.io/react/docs/react-component.html#setstate


// class props & this.props.onClickFunction

class PropsTest extends React.Component{
    render() {
        return (
            <div>
                <button onClick={this.props.onClickFunction} >
                    Add counter
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



class App extends React.Component{
    state = {
        counter: 1
    };
    addCounter = () => {
        this.setState(
          (prevState) => (
              {
                  counter: prevState.counter + 1
              }
          )
        );
    };
    render(){
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
