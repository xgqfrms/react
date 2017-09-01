# decorators

https://github.com/alexcurtis/react-treebeard#decorators

https://github.com/alexcurtis/react-treebeard/blob/master/example/app.js

https://github.com/alexcurtis/react-treebeard/blob/master/example/filter.js





```js


// decorators



const decorators = {
    Loading: (props) => {
        return (
            <div style={props.style}>
                loading...
            </div>
        );
    },
    Toggle: (props) => {
        return (
            <div style={props.style}>
                <svg height={props.height} width={props.width}>
                    // Vector Toggle Here
                </svg>
            </div>
        );
    },
    Header: (props) => {
        return (
            <div style={props.style}>
                {props.node.name}
            </div>
        );
    },
    Container: (props) => {
        return (
            <div onClick={this.props.onClick}>
                // Hide Toggle When Terminal Here
                <this.props.decorators.Toggle/>
                <this.props.decorators.Header/>
            </div>
        );
    }
};

<Treebeard data={...} decorators={decorators}/>





```

