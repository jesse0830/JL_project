import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import registerServiceWorker from './registerServiceWorker';
import Index from "./pages";
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
