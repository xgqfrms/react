var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
    render: function() {
        return ( < div > < mark > Hello, React Old < /mark></div > )
    }
});
ReactDOM.render( < Main / > , document.getElementById('app'));


class HelloMessage extends React.Component {
    render() {
        return <div > < mark > React - New < /mark>Hello, {this.props.name}</div > ;
    }
}
ReactDOM.render( < HelloMessage name = "John" / > , mountNode);