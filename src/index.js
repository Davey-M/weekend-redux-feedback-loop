import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

// REDUCERS ------------------------------------------------------------
const test = (state = '', action) => {

    if (action.type === 'TEST') {
        return state + 1;
    }

    return state;
}

const feelingStore = (state = '', action) => {

    if (action.type === 'SET_FEELING') {
        return action.payload;
    }

    return state
}
const understandingStore = (state = '', action) => {

    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }

    return state
}
const supportStore = (state = '', action) => {

    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }

    return state
}
const commentsStore = (state = '', action) => {

    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }

    return state
}
// REDUCERS ------------------------------------------------------------

const storeInstance = createStore(
    combineReducers({
        test,
        feelingStore,
        understandingStore,
        supportStore,
        commentsStore,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
