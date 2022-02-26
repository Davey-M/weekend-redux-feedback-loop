import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const test = (state = 0, action) => {

    if (action.type === 'TEST') {
        return state + 1;
    }

    return state;
}

const feelingStore = (state = 0, action) => {

    if (action.type === 'SET_FEELING') {
        return action.payload;
    }

    return state
}
const understandingStore = (state = 0, action) => {

    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }

    return state
}
const supportStore = (state = 0, action) => {

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
