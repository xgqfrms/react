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

// ??? fetch datas & loop array/object
// 
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


ReactDOM.render(
    <div>
        <CardList cards={datas}/>
    </div>
    , mountNode
);

export default CardList;


// https://gist.github.com/xgqfrms-GitHub/a36b56ac3c0b4a7fe948f2defccf95ea#gistcomment-2136125
