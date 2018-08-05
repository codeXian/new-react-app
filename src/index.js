import { Router } from '@reach/router';
import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Tree from './routes/Tree';
import Home from './routes/Home/index';
import TreeSelect from './routes/TreeSelect';
import { LocaleProvider } from 'antd';

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Router>
      <Home path="/" />
      <Tree path="tree" />
      <TreeSelect path="treeselect" />
    </Router>
  </LocaleProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
