//
// import modules

class UserGist extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            username: ``,
            lastGistUrl: ``,
        };
    }
    componentDidMount() {
        // no jquery ???
        this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = result[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
        // es6/7 auto bind this ???
    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }
    render() {
        // html5 template & web components
        return (
            <div>
                <h3>
                    用户{this.state.username},最新的 Gist 共享地址:
                </h3>
                <hr />
                <a href={this.state.lastGistUrl}>
                    {this.state.lastGistUrl}
                </a>
                <br />
                <a href="https://react2.xgqfrms.xyz/tips/initial-ajax.html">
                    https://react2.xgqfrms.xyz/tips/initial-ajax.html
                </a>
            </div>
        );
    }
}

const dom_root_uid = document.querySelector(`#example`);

ReactDOM.render(
    <UserGist source="https://api.github.com/users/xgqfrms-github/gists" />,
    dom_root_uid,
);

// export modules