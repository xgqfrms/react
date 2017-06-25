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
                    this state is {this.state.counter}
                </div>
            </div>
        );
    }
}

export default PropsTest;

ReactDOM.render(
    <div>
        <PropsTest {...props}/>
    </div>
    , mountNode
);

