import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Map from './components/map'

import reportWebVitals from './reportWebVitals';
import { Breadcrumb } from 'antd';

ReactDOM.render(
  <React.StrictMode>
    
    <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
