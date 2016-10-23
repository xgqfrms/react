// Code goes here
var Hello = React.createClass({
  render: function(){
     <h1>Rendered from script.jsx!</h1>,
  } 
});

// React.render(
//   <h1>Rendered from script.jsx!</h1>,
//   document.getElementById('example')
// );

React.render(<Hello />, document.getElementById('example')
);
