import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class OutputTables
 * @extends {Component}
 */

import {Table, Icon} from 'antd';

import './output.css';

class OutputTables extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 
        };
    }
    render() {
        return (
            <div style={{maxWidth: 850, boxSizing: "borderBox"}}>
                {/* map Tables*/}
                {/* {title: "基金经理详细信息(折线图同类平均)", datas: Array(4)} */}
                {
                    this.props.dataSources.map(
                        (data, index) => {
                            return(
                                <div 
                                    key={`key-${index}`}
                                    style={{margin: 10, padding: 10, boxSizing: "borderBox"}}>
                                    <p 
                                        style={{textAlign: "center"}}
                                        className="table-title"
                                        >
                                        {`${data.title ? data.title : ""}`}
                                        {/* {`表 ${++index}: ${data.title ? data.title : ""}`} */}
                                    </p>
                                    <Table
                                        dataSource={data.datas}
                                        columns={this.props.columns}
                                        key={`key-${index}`}
                                        bordered
                                        pagination={false}
                                    />
                                </div>
                            ); 
                        }
                    )
                }
            </div>
        );
    }
}

OutputTables.propTypes = {
    data: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    dataSources: PropTypes.array.isRequired
};

const OTS = OutputTables;
export {OTS}
export default OTS;



/* 

GetRowSchema === output

description === KeyWord (只适用于 模糊 search)


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","KeyWord":"指数--> F10--> 非股票指数--> 指数基金","WriteType":"json"}



name": "IndexF10IndexFund",
"description": "指数--> F10--> 非股票指数--> 指数基金",

"name": "IndexF10IndexQuotation",
"description": "指数--> F10--> 非股票指数--> 指数基金--> 指数行情",




ReportName':'IndexF10IndexFund'


name === ReportName (唯一的 query key)


GetRowSchema === output

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexFund'}

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexQuotation'}


GetSchema === input

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json',ReportName':'IndexF10IndexFund'}


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}


*/