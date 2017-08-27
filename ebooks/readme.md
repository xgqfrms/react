# jscomplete

https://jscomplete.com/repl

https://github.com/gildata/RAIO/issues/87


```jsx

const styles = {
    width: "100px",
    height: "100px",
    border: "3px solid red"
};

const Card = (props) =>{
    return (
        <div>
            <button>username: {props.name}</button>
            <img src={props.avatar} style={styles}/>
            <p
                style={{color: "#0ff", fontSize: "23px"}}
                >
                {props.avatar}
            </p>
            <div>company : {props.company}</div>
        </div>
    );
};

const CardList = (props) =>{
    return (
        <div>
            {
                props.cards.map(
                    (card) => {
                        return (<Card {...card}/>);
                    }
                )
            }
        </div>
    );
};

const FormCard = (props) =>{
    return (
        <div>
            <form onSubmit={props.clickHandler}>
                <input
                    type="text"
                    placeholder="gitub username"
                    id=""
                    required
                    />
                <button type="submit">
                    Add a New Card!
                </button>
            </form>
        </div>
    );
};


// fetch datas & map/loop array/object
const datas = [
    {
        name: "xgqfrms",
        avatar: "https://avatars1.githubusercontent.com/u/7291672?v=3",
        company: "xray"
    },
    {
        name: "xgqfrms007",
        avatar: "https://avatars1.githubusercontent.com/u/7291672?v=3",
        company: "ddinfo"
    },    {
        name: "xgqfrms2007",
        avatar: "https://avatars1.githubusercontent.com/u/7291672?v=3",
        company: "gildata"
    }
];


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
              counter: 1,
              cards: datas
        };
        // this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler = (e) => {
        // event.preventDefault();
        e.preventDefault();
        e.stopPropagation();
        console.log(`clicked e = `, e);
        // return xxx;
    }
    render() {
        return (
            <div>
                <FormCard clickHandler={(e) => this.props.clickHandler(e)} />
                <CardList cards={this.state.cards} />
            </div>
        );
    };
};


ReactDOM.render(
    <div>
        <App />
    </div>
    , mountNode
);

export default App;// write code here and click the execute button


```









