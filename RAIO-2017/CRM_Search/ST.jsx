import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table, Icon } from 'antd';

class MenuTable extends Component {
    render() {
        return (
            <div>
                <Table columns={this.props.columns} dataSource={this.props.data} />
            </div>
        );
    }
}


MenuTable.propTypes = {

};

export default MenuTable;