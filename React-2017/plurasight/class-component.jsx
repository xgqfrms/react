// https://gist.github.com/xgqfrms-gildata/0080e188a6921504717220fdae5eddb9

// const 


class PropsTest extends React.Component{
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                <h1>just props test!</h1>
                <span>My name is {props.name}</span>
                <br/>
                <span>Age:{props.age}</span>
            </div>
        );
    };
};


export default PropsTest;




