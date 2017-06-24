
import './styles.css';

/*
.classname-color{
    color: "red";
    background: "#0f0";
}
*/


const BTN = (props) => {
    return (
        <div>
            My name is <button>{props.name}</button>
            <hr/>
            I'm <span className="classname-color">{props.age}</span> yeas old!
        </div>
    );
};

const infos = {
    name: "xgqfrms",
    age: 23
};

ReactDOM.render(<BTN {...infos} />, mountNode);




