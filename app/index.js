
var React = require('react');
var ReactDom = require('react-dom');
import { BrowserRouter } from 'react-router-dom'
import App from './components/app';
require('./index.less');

ReactDom.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);