import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.03
 * 
 * @class CRMS
 * @extends {Component}
 */

// utils
import {urls, ljs_urls} from '../../app/urls';
import {color} from '../../app/color';
import {debug, xyz_debug} from '../../app/debug';

// libs
import {Spin} from 'antd';

// all components in one
import {IC} from './index-components';
// {...IC} / IC.SCT

const {
    SC,
    SCT,
    LF,
    SF
} = {...IC};

class CRMS extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: [],
            routes: [],
            loading: false
        };
    }
/*
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
*/
    /* eslint-disable no-console, no-unused-vars */
    componentDidMount() {
         this.setState({
            loading: true
        });
        let fetch_url = "";
        // ljs_info 
        if(!debug){
            fetch_url = `${ljs_urls.ljs_info}`;
        }else{
            // GetAllLoadSearch
            fetch_url = `${urls.init}?{"Admin":"report","Action":"GetAllLoadSearch","WriteType":"json"}`;
            // GetTreeSchema
        }
        if(debug){
            // fetch_url
            console.log(`%c initial menus(routes) url = ${fetch_url}`, color.color_css1);
        }
        fetch(fetch_url)
        .then((response) => response.json())
        .then(
            (json) => {
                this.setState({loading: true}); 
                return json;
            }
        )
        .then((json)=> {
            let datas = json.Info;
            // create routes
            let routes = datas.map(
                (data) => {
                    if(!debug){
                        console.log(`%c initial menus(routes) data = \n`, color.color_css1, data);
                    }
                    return {
                        path: `/api/sc/${data.name}`,
                        exact: true,
                        main: () => {
                            if (debug) {
                                console.log(`%c SCT data = ${JSON.stringify(data, null, 4)}`, color.color_css3);
                            }
                            return(
                                <div>
                                    {/* <SCT data={data} urlname={data.name}/> */}
                                    {/* <SCT data={data} urlname={`${window.location.hash.substr(1)}`}/> */}
                                    <SCT data={data} urlname={`${window.location.pathname.substr(8)}`}/>
                                    {/* SCT  */}
                                </div>
                            );
                        }
                    };
                }
            );
            if(!debug){
                console.log(`%c all datas, JSON.stringify(datas) = ${JSON.stringify(datas)}`, color.css1);
            }
            return this.setState(
                (prevState, props) => {
                    if(debug){
                        // prevState
                    }
                    return{
                        datas: datas,
                        routes: routes,
                        loading: false
                    };
                }
            );
        });
    }
    xyzSearch = (url) => {
        this.setState({
            loading: true
        });
        if(debug){
            // search url
            console.log(`%c search url = \n`, color.color_css1, url);
        }
        /* 
            "Action":"GetSchemaArray"
            "Action":"GetRowSchemaArray"
        */
        fetch(url)
        .then((response) => response.json())
        .then(
            (json) => {
                this.setState({
                    loading: true
                }); 
                return json;
            }
        )
        .then(
            (json) => {
                if(debug){
                   ! console.log(`%c Search json.Info = `, color.color_css3, json.Info);
                }
                // Properties
                /* 
                    {
                        "Success" : false,
                        "Info" : "Does't Contain The null Report"
                    }
                */
                let datas = json.Info;
                if(!debug){
                    console.log('%C Search datas = ', color.color_css1, datas);
                }
                if(!Array.isArray(datas)){
                    datas = [];
                }
                // ??? reportName one object, not array ?
                /* 
                    http://localhost:3000/api/sc/TestProtocol
                    // search bug!
                */
                let routes = datas.map(
                    (route, index) => {
                        if (xyz_debug(true)) {
                            console.log(`%c route index = ${index} = `, color.css1);
                            console.log(`%c route ${index} = `, color.css2, route);
                        }
                        return {
                            path: `/api/sc/${route.name}`,
                            exact: true,
                            main: () => (
                                <div>
                                    {/* contents */}
                                    <SCT data={route} urlname={route.name}/>
                                </div>
                            )
                        };
                    }
                );
                if(debug){
                    console.log('%c routes =', color.css1, routes);
                }
                return this.setState(
                    (prevState, props) => {
                        // prevState
                        return{
                            datas: datas,
                            routes: routes,
                            loading: false
                        }
                    }
                );
            }
        );
    };
    /* eslint-enable no-console */
    render() {
        return (
            <div style={{marginTop: 67}}>
                {/* <SF xyzSearch={this.xyzSearch}/> */}
                {/* menus */}
                {
                    <Spin
                        tip="Loading..."
                        size="large"
                        spinning={this.state.loading}>
                        {/* SCT in routes*/}
                        <SC 
                            routes={this.state.routes}
                            datas={this.state.datas}
                        />
                    </Spin>
                }
                {/* 
                    // Login Form
                    <LF /> 
                */}
            </div>
        );
    }
}


CRMS.propTypes = {
    // urls: PropTypes.object.isRequired,
};

export {CRMS};
export default CRMS;