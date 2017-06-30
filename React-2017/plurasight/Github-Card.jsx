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
                    ref=""
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
        console.log(`clicked e = `, e);
        // return xxx;
    }
    render() {
        return (
            <div>
                <FormCard {...props} clickHandler={this.props.clickHandler} />
                <AppCardList cards={this.state.cards} />
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

export default App;


// https://gist.github.com/xgqfrms-GitHub/a36b56ac3c0b4a7fe948f2defccf95ea#gistcomment-2136125


/*
https://app.pluralsight.com/library/courses/react-js-getting-started/exercise-files

http://s.pluralsight.com/course-materials/react-js-getting-started/14FA9B251F/20150612195050/react-js-getting-started.zip?userHandle=979d028f-fb22-4b52-a073-ba740fabc50a

*/


/*

Invariant Violation: Stateless function components cannot have refs.



*/
