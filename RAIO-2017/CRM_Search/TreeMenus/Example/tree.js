'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

/**
 * 
 * @param {object/array} data 
 * @param {boolean} hasChildren 
 */

const TreeMenus = (data, hasChildren=true) => {
    let html = (hasChildren) ? `<div>` : ``; 
    // Wrap with div if true
    html += `<ul>`;
    for(let item in data){
        // keys ???
        console.log(`item = `, item);
        html += `<li>`;
        // Uncaught TypeError: Cannot read property 'children' of null
        // ???
        if(typeof(data[item].children) === 'object'){ 
            // An array will return 'object'
            if(hasChildren){
                html += `<a href="#${data[item].apiname ? data[item].apiname : ''}">${data[item].name}</a>`;
                // html += `<a href="/api/sc/${data[item].apiname ? data[item].apiname : ''}">${data[item].name}</a>`;
                // html += (<Link to={`/api/sc/${data[item].apiname ? data[item].apiname : ''}`} />);
            } else {
                html += data[item].name; 
                // Submenu found, but top level list item.
            }
            html += TreeMenus(data[item].children, true); 
            console.log(`new item = `, data[item].children);
            // Submenu found. 
            // Calling recursively same method (and wrapping it in a div)
        } else {
            html += data[item].name;
            // No submenu
        }
        html += `</li>`;
    }
    html += `</ul>`;
    html += (hasChildren) ? `<div>` : ``; 
    return html;
};




/* 



<Link to={} />

<Link to={`/api/sc/${data.name}`}>



{
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
}

??? </SubMenu>




<Menu />

</SubMenu>

</Menu>

</SubItem>


<Route


*/



/* const Tree = TreeMenus;
export {Tree};
export default Tree;
 */



export {TreeMenus};
export default TreeMenus;