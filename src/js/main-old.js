import React from '../../react';
import ReactDOM from '../../react-dom';

import App from './app.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

/*
注意：
如果想要组件可以在任何的应用中使用，
需要在创建后使用 export 将其导出，
在使用组件的文件使用 import 将其导入。
*/