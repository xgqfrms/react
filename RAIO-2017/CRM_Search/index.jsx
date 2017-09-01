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

import './index.css';

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
                                    <SCT 
                                        data={data}
                                        urlname={`${window.location.pathname.substr(8)}`}
                                        loading={this.state.loading}
                                        />
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
    setLoading = (value) => {
        this.setState({
            loading: value
        }); 
    };
    /* eslint-enable no-console */
    render() {
        return (
            <div className="app-api">
                {
                    <Spin
                        tip="Loading..."
                        size="large"
                        spinning={this.state.loading}>
                        {/* SCT in routes*/}
                        <SC 
                            routes={this.state.routes}
                            datas={this.state.datas}
                            setLoading={this.setLoading}
                            loading={this.state.loading}
                        />
                    </Spin>
                }
            </div>
        );
    }
}


CRMS.propTypes = {
    // urls: PropTypes.object.isRequired,
};

export {CRMS};
export default CRMS;