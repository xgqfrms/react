/*

# react & datatables



https://medium.com/@zbzzn/integrating-react-and-datatables-not-as-hard-as-advertised-f3364f395dfa

https://github.com/BorisKozo/react-datatables



$ npm i -D datatables.net jquery


https://github.com/gildata/RAIO/issues/10

*/



const $ = require('jquery');
$.DataTable = require('datatables.net');


const columns = [
    {
        title: 'Name',
        width: 120,
        data: 'name'
    },
    {
        title: 'Nickname',
        width: 180,
        data: 'nickname'
    },
];


function updateTable(names) {
    const table = $('.data-table-wrapper')
                  .find('table')
                  .DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldNameData = this.data();
        const newNameData = names.find((nameData) => {
            return nameData.name === oldNameData.name;
        });
        if (oldNameData.nickname !== newNameData.nickname) {
            dataChanged = true;
            this.data(newNameData);
        }
        return true; 
        // RCA esLint configuration wants us to return something
    });

    if (dataChanged) {
        table.draw();
    }
}


class Table extends Component { 
    componentDidMount() {
        $(this.refs.main).DataTable({
           dom: '<"data-table-wrapper"t>',
           data: this.props.names,
           columns,
           ordering: false
        });
    }  
    componentWillUnmount(){
       $('.data-table-wrapper')
       .find('table')
       .DataTable()
       .destroy(true);
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps.names.length !== this.props.names.length) {
            reloadTableData(nextProps.names);
        } else {
            updateTable(nextProps.names);
        }
        return false;
    }
    render() {
        return (
            <div>
                <table ref="main" />
            </div>);
    }
}


