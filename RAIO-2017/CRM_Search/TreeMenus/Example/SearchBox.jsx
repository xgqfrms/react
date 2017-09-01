import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {debug} from '../../../../app/debug';
import {color} from '../../../../app/color';

const init_obj = {"Admin":"report","Action":"GetTreeSchema","WriteType":"json"};
class SearchBox extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            obj: init_obj,
            key: "KeyWord"
        };
    }
    componentDidMount() {
        // this.fetchData();
        // init ???
        let str_obj = JSON.stringify(this.state.obj);
        this.props.fetchTree(str_obj);
    }
    prefixChange = (e) => {
        let prefix_key = e.target.value;
        if (debug) {
            console.log(`%c Changed prefix_key = `, color.css1, prefix_key);
        }
        // value not change ???
        let temp_obj = {};
        let keys = Object.keys(this.state.obj);
        // ["Admin", "Action", "WriteType"]
        if(keys.length > 3){
            // keys has ???
            // first match value / undefined 
            let result = keys.find(
                (key) => {
                    console.log(`key = `, key);
                    return key === "KeyWord"
                    // "ReportName"
                }
            );
            if(result !== undefined){
                // find "KeyWord"
                temp_obj[`${prefix_key}`] = this.state.obj["KeyWord"];
                if (debug) {
                    console.log(`%c KeyWord = `, color.css1, this.state.obj["KeyWord"]);
                }
                // just change key, still use old value
                this.setState({
                    obj: Object.assign({}, init_obj, temp_obj)
                });
            }else{
                // undefined & find "ReportName"
                temp_obj[`${prefix_key}`] = this.state.obj["ReportName"];
                if (debug) {
                    console.log(`%c ReportName = `, color.css1, this.state.obj["ReportName"]);
                }
                this.setState({
                    obj: Object.assign({}, init_obj, temp_obj)
                });
            }
            /* 
                ["Admin", "Action", "WriteType"].find(
                    (key) => {
                        console.log(`key = `, key);
                        return key === "KeyWord"
                        // "ReportName"
                    }
                );
             */
        }
        this.setState({
            key: prefix_key
        });
    };
    valueChange = (e) => {
        // vc
        let key = this.state.key;
        let value = e.target.value;
        let temp_obj = {};
        if (debug) {
            console.log(`%c Changed key = `, color.css2, key);
            console.log(`%c Changed value = `, color.color_css3, value);
        }
        if(key === "KeyWord" && value.length !== 0){
            temp_obj[key] = value;
        }
        if(key === "ReportName" && value.length !== 0){
            temp_obj[key] = value;
        }
        let keys = Object.keys(temp_obj);
        if(keys.length !== 0){
            this.setState({
                obj: Object.assign({}, init_obj, temp_obj)
            });
        }
        if(value.length === 0){
            this.setState({
                obj: Object.assign({}, init_obj)
            });
        }
    };
    serachChange = (e) => {
        // serachChange
        let key = e.target.id;
        let value = e.target.value;
        if (debug) {
            console.log(`serachChange e.target.id = `, key);
            console.log(`serachChange e.target.value = `, value);
        }
        // prefix [ReportName, KeyWord]
        let temp_obj = {};
        if(key === "KeyWord"){
            temp_obj[key] = value;
        }
        if(key === "ReportName"){
            temp_obj[key] = value;
        }
        let keys = Object.keys(temp_obj);
        if(keys.length !== 0){
            this.setState({
                obj: Object.assign({}, {"Admin":"report","Action":"GetTreeSchema","WriteType":"json"}, temp_obj)
            });
        }
    };
    fetchData = (e) => {
        e.preventDefault();
        // stop refresh
        // fetchData
        let str_obj = JSON.stringify(this.state.obj);
        this.props.fetchTree(str_obj);
        // {"KeyWord":"测试协议"}
        // {"ReportName":"TestProtocol"}
    };
    render() {
        return (
            <div
                style={{
                    background: "#777"
                }}>
                {/* SearchBox */}
                <form onSubmit={this.fetchData}>
                    {/* <label htmlFor="" style={{color: "#fff", margin: 5, fontSize: 16}}>
                        查询方式:  
                    </label> */}
                    <select
                        name=""
                        id="prefix"
                        onChange={this.prefixChange}
                        defaultValue="KeyWord" 
                        style={{
                            color: "#000",
                            marginLeft: 10,
                            fontSize: 12,
                            borderRadius: 3,
                            height: 30,
                            lineHeight: 30,
                            //width: 60
                        }}
                        >
                        <option value="KeyWord">关键词</option>
                        <option value="ReportName">报表名</option>
                    </select>
                    <input 
                        id="vc"
                        type="text"
                        placeholder="多个关键字之间用 空格 分割"
                        onChange={this.valueChange}
                        autoComplete
                        autoSave
                        style={{
                            width: "70%",
                            margin: 10,
                            marginLeft: 3,
                            boxSizing: "border-box",
                            fontSize: 12,
                            borderRadius: 5,
                            textIndent: 3,
                            border: "1px solid #fff",
                            height: 30,
                            lineHeight: 30,
                        }}
                    />
                    {/* <input 
                        id="KeyWord"
                        type="text"
                        placeholder="Search KeyWord"
                        onChange={this.serachChange}
                    />
                    <input 
                        id="ReportName"
                        type="text"
                        placeholder="Search ReportName"
                        onChange={this.serachChange}
                    /> */}
                    <button type="submit" className="submit-btn btn btn-default" id="submit-btn">
                        查询
                    </button>
                </form>
            </div>
        );
    }
}

SearchBox.propTypes = {

};

export {SearchBox};
export default SearchBox;


/* 

http://localhost:3000/api/sc/#MacroTree


http://localhost:3000/api/sc/?#MacroTree

refresh bug ???

*/