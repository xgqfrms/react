import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class InputTable
 * @extends {Component}
 */

import {Table, Icon} from 'antd';

class InputTable extends Component {
    render() {
        return (
            <div style={{margin: 10, padding: 10, boxSizing: "borderBox"}}>
                <Table
                    dataSource={this.props.dataSource}
                    columns={this.props.columns}
                    bordered
                    pagination={false}
                />
                {/* this.props.data = {this.props.data} */}
            </div>
        );
    }
}

InputTable.propTypes = {
    data: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired
};

const IT = InputTable;
export {IT};
export default IT;



/* 


GetSchema === input

// 指数--> F10--> 非股票指数--> 指数基金

description === KeyWord (只适用于 模糊 search)


http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'指数--> F10--> 非股票指数--> 指数基金'}

{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'指数--> F10--> 非股票指数--> 指数基金'}:




name": "IndexF10IndexFund",
"description": "指数--> F10--> 非股票指数--> 指数基金",

"name": "IndexF10IndexQuotation",
"description": "指数--> F10--> 非股票指数--> 指数基金--> 指数行情",







name === ReportName (唯一的 query key)


GetRowSchema === output

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexFund'}

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexQuotation'}


GetSchema === input

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json', 'ReportName':'IndexF10IndexFund'}

http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}


*/