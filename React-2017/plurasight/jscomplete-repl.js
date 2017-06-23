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



const BTN = (props) => {
    return (
        <div>
           My name is <button>{props.name}</button>
           <hr/>
           I'm <span style={styles}>{props.age}</span> yeas old!
        </div>
    );
};

const infos = {
    name: "xgqfrms",
    age: 23
};

const styles = {
    color: "red",
  background: "#0f0"
}
ReactDOM.render(<BTN {...infos} />, mountNode);


// style={object}

styles = object


// style={{color: "red"}}


const BTN = (props) => {
    return (
        <div>
           My name is <button>{props.name}</button>
           <hr/>
           I'm <span style={{color: "red"}}>{props.age}</span> yeas old!
        </div>
    );
};

const infos = {
    name: "xgqfrms",
    age: 23
};

const styles = {
    color: "red",
  background: "#0f0"
}
ReactDOM.render(<BTN {...infos} />, mountNode);





const BTN = (props) => {
    return (
        <div>
            My name is <button>{props.name}</button>
            <hr/>
            I'm <span className={styles.color}>{props.age}</span> yeas old!
        </div>
    );
};

const infos = {
    name: "xgqfrms",
    age: 23
};


const styles = {
    color: "red",
    background: "#0f0"
}

ReactDOM.render(<BTN {...infos} />, mountNode);







const BTN = (props) => {
    return (
        <div>
           My name is <button>{props.name}</button>
           <hr/>
           I'm <span className={styles.color}>{props.age}</span> yeas old!
        </div>
    );
};

const infos = {
    name: "xgqfrms",
    age: 23
};

const styles = {
    color: "red",
    background: "#0f0"
}
ReactDOM.render(<BTN {...infos} />, mountNode);





