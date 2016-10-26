//https://jsfiddle.net/reactjs/69z2wepo/
// JSX
// steps: components 生命周期
/*
getInitialState
componentWillMount
render
componentDidMount
*/

var Hello = React.createClass({
  getInitialState: function(){
    alert("step1: getInitialState");
    return {
      opacity: 1.0,
      fontSize: '36px',
      color: '#f00'
    }
  },
  componentWillMount: function() {
    alert("step2: componentWillMount");
  },
  componentDidMount: function() {
    alert("step4: componentWillMount");
  },
  render: function() {
    alert("step3: render DOM");
    return <div>
    <hr />
    Hello {this.props.name}
    <hr />
    </div>;
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);


var Hello2 = React.createClass({
  render: function() {
    var styleObj = {
      color: 'red',
      fontSize: '2rem'
    };
    return <div>
    <h1>不太推荐</h1>
    <span style={styleObj}>inline-style color colorObj</span>
    <h2>还要修改CSS font-size: '2rem' <mark>驼峰命名法</mark>：fontSize: '2rem'</h2>
    <h3>类似js 用法：
      <code> document.getElementById('container').style.<mark>fontSize</mark> = '2em';</code>
    </h3>
    <hr />
    Hello {this.props.name}
    <hr />
    </div>;
  }
});
ReactDOM.render(
  <Hello2 name="World" />,
  document.getElementById('container2')
);


var Hello3 = React.createClass({
  render: function() {
    return <div>
    <h1>不推荐：</h1>
    <span style={{color: 'blue'}}> &lt;inline-style color &gt;</span>
    <hr />
    Hello {this.props.name}
    <hr />
    </div>;
  }
});
ReactDOM.render(
  <Hello3 name="World" />,
  document.getElementById('container3')
);


var Hello4 = React.createClass({
  render: function() {
    return <div>
    <h1>推荐方式：</h1>
    <span className="color">css color className</span>
    <hr />
    Hello {this.props.name}
    <hr />
    </div>;
  }
});
ReactDOM.render(
  <Hello4 name="World" />,
  document.getElementById('container4')
);