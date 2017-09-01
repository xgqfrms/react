# Links Tree & Menus







https://github.com/reactjs/react-router-tutorial/tree/master/lessons/03-navigating-with-link

```jsx


// modules/App.js
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/repos">Repos</Link>
                    </li>
                </ul>
            </div>
        );
    }
})






import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('app'))




```




## goal



```jsx

    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>

    <li>
        <Link to="/about">About</Link>
    </li>
    <li>
        <Link to="/repos">Repos</Link>
    </li>

routes = [
    {
        pathname: "api",
        parent: true,
        children: []
    }
];


this.props.datas.map((data, index) => (
    <SubItem key={(index)}>
        <Link to={`/api/sc/${data.name}`}>
            <Icon
                type={data.name ? this.randomIcons(data.description.substr(0, 2)) : "bar-chart"}
                style={{fontSize: 12, color: '#fff'}}
            />
            {data.description.substr(0,2)}
        </Link>
    </SubItem>
))

// All
http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetAllLoadSearch%22,%22WriteType%22:%22json%22}


// TreeMenus

http://10.1.5.203/http-manage/admin?{'Admin':'report','Action':'GetTreeSchema','WriteType':'json'}

http://10.1.5.203/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetTreeSchema%27,%27WriteType%27:%27json%27}



```






















