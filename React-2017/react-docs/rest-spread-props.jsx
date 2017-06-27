// {...props}

/*


https://github.com/gildata/RAIO/issues/3


https://github.com/gildata/RAIO/tree/master/src/component-template

https://github.com/gildata/RAIO/blob/master/src/component-template/destruction-assignment.jsx

https://github.com/gildata/RAIO/blob/master/src/component-template/skeleton.jsx

*/


function LinkComponent(props) {
    const {
        children,
        disabled,
        ...other
    } = this.props;
    // rest & speard
    const statusClass = disabled ? `disabled` : `active`;
    return (
        <a className={statusClass} {...other }>
            {children}
        </a>
    );
}


function formatDate(date) {
    return date.toLocaleDateString();
}

function PropsTest(props) {
    return (
        <div>
            <h1>just props test!</h1>
            <span>My name is {props.name}</span>
            <h1>Age:{props.age}</h1>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}/>
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
            <hr/>
            <PropsTest {...infos}/>
        </div>
    );
}

const infos = {
    name: 'xgqfrms',
    age: '23'
};

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/72/72'
    }
};
ReactDOM.render(
    <div><Comment {...comment} /></div>,
    document.getElementById('root')
);
























