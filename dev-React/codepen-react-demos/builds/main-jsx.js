"use strict";

// main.jsx

var Hello = React.createClass({
  render: function render() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(<Hello name="World" />, document.getElementById('container'));