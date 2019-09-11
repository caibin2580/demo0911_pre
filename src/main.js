// import './css/index.css';
// import './css/main.less';
import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import { LocaleProvider } from 'antd';
// import zhCN from 'antd/es/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// import App from './component/app';
// import store from './store';
import App from './component/test/app';

import 'antd/dist/antd.css';

ReactDOM.render(
    // <LocaleProvider locale={zhCN}>
    //     <Provider >
    //         <App />
    //     </Provider>
    // </LocaleProvider>,
    <App/>,
    document.getElementById('app')
);