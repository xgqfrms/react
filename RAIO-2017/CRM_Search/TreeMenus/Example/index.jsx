'use strict';
import React from 'react';
import PropTypes from 'prop-types';

// components
import {data} from './data';
import styles from './styles';

import './a-link-color.css';

// import * as filters from './filter';

// import {NodeViewer} from './NodeViewer';


// libs
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { Spin } from 'antd';

import {StyleRoot} from 'radium';
import {Treebeard, decorators} from 'react-treebeard';

/* import {Layout, Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
const SubMenu = Menu.SubMenu;
const SubItem = Menu.Item;
 */

import {SearchBox} from './SearchBox';

// utils
import {debug} from '../../../../app/debug';
import {color} from '../../../../app/color';

let apiname = "";



const api = `http://10.1.5.203/http-manage/admin`;
const init_obj = {'Admin':'report','Action':'GetTreeSchema','WriteType':'json'};

// Example: Customising The Header Decorator To Include Icons
decorators.Header = ({style, node}) => {
    const iconType = node.children ? 'folder' : 'file-text';
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = {marginRight: '5px'};
/* 

    // const fetch_url = window.location.pathname.substr(8);
    const host = window.location.host;
    // localhost:3000"
    const hostname = window.location.hostname;
    // "localhost"
    const origin = window.location.origin;
    // "http://localhost:3000"
    const href = window.location.host;
    // "http://localhost:3000/api"
    const pathname = window.location.pathname;
    // "/api"
    
    //  #hash no reload/ refresh

    const hash = window.location.hash;
    // "#007"
    const port = window.location.port;
    // "3000"
    const protocol = window.location.protocol;
    // "http:"
    const search = window.location.search;
    // "?q=xgqfrms&id="
    // replace()
    // reload() 
    // http://localhost:3000/api?q=xgqfrms&id=#007
    const fetch_url = window.location.pathname.substr(8);

*/
    // /api
    node.apiname ? window.location.hash = `${node.apiname}` : ``;
    node.apiname ? apiname = node.apiname : "node.apiname";
    return (
        <div style={style.base} className="li-width">
            <div style={style.title} className="a-link-color">
            <Link to={`/api/sc/${node.apiname ? node.apiname : ""}`}>
                <i className={iconClass} style={iconStyle}/>
                {/* {node.name} & {`${node.apiname ? "api = "+node.apiname : "☹️"}`} */}
                {/* {node.name} & {`${node.apiname ? "❤" : "☹️"}`} */}
                {node.name}
                {/* 
                    {(node.apiname ? window.location.hash = `${node.apiname}` : ``)}
                */}
                {/* {setTimeout(() => {
                    (node.apiname ? window.location.hash = `${node.apiname}` : ``)
                }, 0)}  */}
            </Link>
                {/* {JSON.stringify(node)} */}
            </div>
        </div>
    );
};


class DemoTree extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            url : "",
            loading: false
        };
    }
    // this.onToggle = this.onToggle.bind(this);
    onToggle = (node, toggled) => {
        const {cursor} = this.state;
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState({cursor: node});
    };
    componentWillMount(){
        this.setState({
            url: apiname
        });
        const that = this;
        setTimeout(function() {
            console.log(`apiname url = `, that.state.url);
        }, 1000);
        // Warning: setState(...): Cannot update during an existing state transition
        // (such as within `render` or another component's constructor). 
        // Render methods should be a pure function of props and state; 
        // constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.
        // this.fetchTree();
    }
    componentDidMount() {
        // init data
        let str_obj = JSON.stringify(init_obj);
        this.fetchTree(str_obj);
    }
    fetchTree = (str_obj) => {
        this.setState({
            loading: true
        });
        this.props.setLoading(true);
        // key value
        let datas = {};
        let new_url = ``;
        if(str_obj === undefined){
            let str_init_obj = JSON.stringify(init_obj);
            new_url = `${api}?${str_init_obj}`;
            console.log(`obj === undefined`);
            // all tree data
        }else{
            new_url = `${api}?${str_obj}`;
            // {"KeyWord":"测试协议"}
            // {"ReportName":"TestProtocol"}
            // {"Admin":"report","Action":"GetTreeSchema","WriteType":"json",}:
        }
        const that = this;
        fetch(new_url)
        .then((res) => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`fetched json`, json);
                }
                let 
                datas = json.Info.children;
                /* that.setState({
                    data: datas
                }); */
                // no delay
                setTimeout(function() {
                    that.setState({
                        data: datas,
                        loading: false
                    });
                    that.props.setLoading(false);
                }, 0);
                // do something in here!
                return datas;
            }
        );
    };
    render() {
        const {cursor} = this.state;
        return (
            // <StyleRoot>
            // loading... 
                <div>
                    <Spin
                        spinning={this.state.loading}
                        tip="加载中..."
                        size="large">
                        <SearchBox fetchTree={this.fetchTree}/>
                        <Treebeard
                            data={this.state.data || []}
                            decorators={decorators}
                            onToggle={this.onToggle}
                        />
                    </Spin>
                </div>
            // </StyleRoot>
        );
    }
}

// pt



export {DemoTree};
export default DemoTree;

