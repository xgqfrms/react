// https://jscomplete.com/repl





const BTN = (props) => {
    return (
        <div>
            btn name is <button>{props.name}</button>
        </div>
    );
};

ReactDOM.render(<BTN name="btn" />, mountNode);





const BTN = (props) => {
    return (
        <div>
            My name is <button>{props.name}</button>
        </div>
    );
};

const infos = {
    name: "xgqfrms",
    age: 23
};

ReactDOM.render(<BTN {...infos} />, mountNode);


















