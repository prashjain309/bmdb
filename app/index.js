
var React = require('react');
var ReactDom = require('react-dom');
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store/index";
import App from './components/app';
require('./index.less');

ReactDom.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);