const styles = {
    color: "red",
    background: "#0f0",
    fontSize: "32px"
};

const BTN = (props) => {
    return (
        <div>
           My name is <button>{props.name}</button>
           <br/>
           I'm <span style={{color: styles.color}}>{props.age}</span> yeas old!
           <hr/>
        </div>
    );
};

const infos = {
    name: "xgqfrms",
    age: 23
};

const props = {
    name: "xgqfrms",
    age: 23
};

class PropsTest extends React.Component{
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                <h1>just props test!</h1>
                <hr/>
                My name is <span style={{color: "blue"}}>{props.name}</span>
                <br/>
                Age:<span style={{color: "#f10dc8"}}>{props.age}</span>
            </div>
        );
    };
};


export default PropsTest;

ReactDOM.render(
    <div>
        <BTN {...infos} />
        <PropsTest {...props}/>
    </div>
    , mountNode
);

