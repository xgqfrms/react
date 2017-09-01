import React, { Component } from 'react';
import PropTypes from 'prop-types';


import {TreeMenus} from './tree.js';

class Tree extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 
        };
    }
    componentDidMount() {
        const url = `https://cdn.xgqfrms.xyz/json/crm/tree-menus.json`;
        // const url = `http://10.1.5.203/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetTreeSchema%27,%27WriteType%27:%27json%27}`
        let data = {};
        fetch(url)
            .then((res) => res.json())
            .then(
                (json) => {
                    console.log(`fetched json`, json);
                    // data
                    // return data = json;
                    // get PromiseValue & assign it to data
                    /* 
                        return json;
                        // get Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: {…}}
                    */
                    data = json.Info.children;
                    // do something in here!
                    return data;
                }
            );
        // promise ???
        let tree = ``;
        setTimeout(() => {
            // create links
            tree = TreeMenus(data, true);
            document.querySelector("#app").innerHTML = tree;
        }, 1000);
    }
    render() {
        return (
            <div
                id="app"
                style={{
                    maxWidth: 200,
                    overflowX: "auto"
                }} 
                >
                {/*  */}
            </div>
        );
    }
}

Tree.propTypes = {

};

export {Tree};
export default Tree;