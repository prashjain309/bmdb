
var React = require('react');
var ReactDom = require('react-dom');
import { BrowserRouter } from 'react-router-dom'
import App from './components/app';
require('./index.css');

ReactDom.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App basename={process.env.PUBLIC_URL} />
    </BrowserRouter>,
    document.getElementById('app')
);