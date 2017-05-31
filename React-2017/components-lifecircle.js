class UserGist extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            username: '',
            lastGistUrl: ''
        };
    }
    componentDidMount() {
        this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = result[0];
            // result arrary[0]
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }
    render() {
        return (
            <div>
                <h3>{this.state.username} 用户最新的 Gist 共享地址：</h3>
                <hr/>
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
                <br/>
                <a href="https://react2.xgqfrms.xyz/tips/initial-ajax.html">https://react2.xgqfrms.xyz/tips/initial-ajax.html</a>
            </div>
        );
    }
 }

ReactDOM.render(
    <UserGist source="https://api.github.com/users/xgqfrms-github/gists" />,
    document.getElementById('example')
);


{
    // docs component-specs.html
    // https://api.jquery.com/jquery.get/
    React Ajax 教程实例
    <div id="example"></div>
}





$(function(){
    $.get("https://api.github.com/users/xgqfrms-github/gists", function(data) {
        console.log(`data description = ${data[0].description}`);
    })
    .done(function() {
        console.log(`success!`);
    })


    $.get("https://api.github.com/users/xgqfrms-github/gists", {user: "xgqfrms", public: "false"} )
        .done(function(data) {
            console.log(`data[0] description = ${data[0].description}`);
            console.log(`data = ${data}`);
            console.log(`success!`);
        }
    );
});



https://api.github.com/users/xgqfrms-github/gists


$(() => {
    $.get("https://api.github.com/users/xgqfrms-github/gists", (data) => {
        console.log(`data description = ${data[0].description}`);
    })
    .done(function() {
        console.log(`success!`);
    })

    $.get("https://api.github.com/users/xgqfrms-github/gists", {user: "xgqfrms", public: "false"} )
        .done((data) => {
            console.log(`data[0] description = ${data[0].description}`);
            console.log(`data = ${data}`);
            console.log(`success!`);
        }
    );
});




.lesson__state--failed {
    background: rgba(53,69,81,0.9) url(/assets/diag-red.png);
    border: 1px solid #5a2a29;
    min-width: 460px;
}
// https://production.cdmycdn.com/assets/diag-red.png


.ui-loading__image, body.composer .backtest, .lesson-action-bar__state, .lesson__state, .widget-err-console.is-hidden {
    z-index: -1000;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease-in-out,-webkit-transform 0.25s ease-in-out,z-index 0s linear,left 0s linear;
    -webkit-transition-delay: 0s,0s,0.25s,0.25s;
    -webkit-transition: opacity 0.25s ease-in-out,-webkit-transform 0.25s ease-in-out,z-index 0s linear 0.25s,left 0s linear 0.25s;
    transition: 
        opacity 0.25s ease-in-out, 
        transform 0.25s ease-in-out, 
        z-index 0s linear 0.25s, 
        left 0s linear 0.25s;
}
