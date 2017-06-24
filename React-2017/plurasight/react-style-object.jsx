/*


// style={object}

styles = object

// style={{color: "red"}}


// style={{marginRight: spacing + 'em'}}




*/









const styles = {
    color: "red",
    background: "#0f0",
    fontSize: "32px"
};

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
    age: 25
};

ReactDOM.render(<BTN {...infos} />, mountNode);





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
};


ReactDOM.render(<BTN {...infos} />, mountNode);



// https://stackoverflow.com/questions/43366026/react-inline-style-style-prop-expects-a-mapping-from-style-properties-to-value#


const styles = {
    color: "red",
    background: "#0f0",
    fontSize: "32px"
};

const BTN = (props) => {
    return (
        <div>
           My name is <button>{props.name}</button>
           <hr/>
           I'm <span style={{color: styles.color}}>{props.age}</span> yeas old!
        </div>
    );
};

const infos = {
    name: "xgqfrms",
    age: 23
};

ReactDOM.render(<BTN {...infos} />, mountNode);







