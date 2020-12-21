import React from 'react';
import ReactDOM from 'react-dom';
import { FetchProvider } from 'services/FetchService/FetchProvider';
import 'antd/dist/antd.less';
import 'assets/styles/main.css';
import { ThemeService } from 'services/Theme';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeService>
      <FetchProvider>
        <App />
      </FetchProvider>
    </ThemeService>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
