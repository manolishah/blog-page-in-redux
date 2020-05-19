import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import tunk from 'redux-thunk';
const store=createStore(reducers,applyMiddleware(tunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('root')
);  