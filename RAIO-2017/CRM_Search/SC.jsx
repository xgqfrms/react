import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.08
 */

//utils
import {debug} from '../../app/debug';

// components
import {DM}from './DynamicMenus';
// tree
import {DemoTree} from './TreeMenus/Example';

// libs
import 'whatwg-fetch';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './sc.css';

import {Layout, Menu, Icon, Spin} from 'antd';

import 'antd/dist/antd.css';
const SubMenu = Menu.SubMenu;
const SubItem = Menu.Item;

class SC extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: [],
            theme: 'dark',
            loading: this.props.loading
        };
    }
    handleClick = () => {
        // 
    }
    randomIcons = (title) => {
        let icon = "";
        switch(title){
            case "基金": 
                icon = "pie-chart";
                break;
            case "主板": 
                icon = "line-chart";
                break;
            case "股票": 
                icon = "bar-chart";
                break;
            case "主板F10": 
                icon = "line-chart";
                break;
            case "新三板专题统计": 
                icon = "dot-chart";
                break;
            case "主板F9": 
                icon = "line-chart";
                break;
            case "港股f9": 
                icon = "area-chart";
                break;
            case "指数": 
                icon = "area-chart";
                break;
            case "新三板F9": 
                icon = "dot-chart";
                break;
            default:
                icon = "bar-chart";
        }
        if(debug){
            // console.log(`icon = \t`, icon);
        }
        return icon;
        // this.randomIcons(data.name.substr(0, 2))
    }
    // no need any more
    // click link fetch
    // componentDidMount() 
    clickFetchData = () => {
        // 'Access-Control-Allow-Origin' header 
        // set the request's mode to 'no-cors' 
        // const url = `http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetAllLoad","WriteType":"json"}`;
        const url = `http://localhost:7777/info/`;
        const init = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            mode: 'no-cors'
        };
        const request_url = new Request(url, ...init);
        fetch(request_url)
        .then((response) => response.json())
        .then((json)=> {
            if(debug){
                console.log(`json = ${json}`);
                console.log(`json.length = ${json.length}`);
            }
            // json = json.Info;
            if(!debug){
                console.log(`json.Info = ${json.Info}`);
                console.log(`json.Info.length = ${json.Info.length}`);
            }
            let datas = json.map(
                (data) => {
                    if(debug){
                        console.log(`data`, data);
                    }
                    return data;
                }
            );
            if(debug){
                console.log(`datas = ${JSON.stringify(datas)}`);
            }
            return datas;
        })
        .then((datas)=> {
            if(debug){
                console.log(`datas new = ${JSON.stringify(datas)}`);
            }
            return this.setState({
                datas: datas
            });
        });
    };
    // get data from props
    render() {
        return (
            <div
                style={{
                    // border: '1px solid #ccc',
                    // minHeight: 1000,
                    // overflowY: "scroll",
                    boxSizing: "border-box",
                    // overflow: "hidden",
                    height: "100%",
                }} >
                <Router>
                    {/* display: 'flex', */}
                    <div 
                        style={{
                            display: 'flex',
                            // width: "100%",
                            // height: "100%",
                            boxSizing: "border-box",
                            // border: '1px solid #fff',
                            // overflow: "hidden",
                        }}>
                        <div className="treebox" id="treebox" >
                            <DemoTree setLoading={this.props.setLoading}/>
                        </div>
                        {/* style={{display: 'flex', overflowX: "scroll"}} */}
                        <div className="app-content">
                            <Spin
                                tip="Loading..."
                                size="large"
                                spinning={this.state.loading}>
                                {
                                    this.props.routes.map((route, index) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.main}
                                        />
                                    ))
                                }
                            </Spin>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

SC.propTypes = {
    routes: PropTypes.array.isRequired,
    datas: PropTypes.array.isRequired
};

export {SC};
export default SC;