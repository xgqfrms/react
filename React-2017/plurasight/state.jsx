class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0
        };
    }
    tick() {
        this.setState(
            (prevState) => (
                {
                    secondsElapsed: prevState.secondsElapsed + 1
                }
            )
        );
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
}

ReactDOM.render(<Timer />, mountNode);





{

    /*
    https://gist.github.com/xgqfrms-GitHub/e77ddb2fb6e9a96496e1d9b7d83a09b7

    JavaScript Best Practices
    
    https://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip
    */

}





