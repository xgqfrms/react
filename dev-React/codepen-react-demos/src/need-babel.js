//https://jsfiddle.net/reactjs/69z2wepo/
// JSX

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);

var Hello2 = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello2 name="World" />,
  document.getElementById('container2')
);