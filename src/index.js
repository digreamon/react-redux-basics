import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import reducer from "./reducer";

const STORE = createStore(reducer);

ReactDOM.render(
    <Provider store={STORE}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
