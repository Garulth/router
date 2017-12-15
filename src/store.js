import { createStore, compose, applyMiddleware } from "redux";
import { browserHistory } from "react-router";
import { routerMiddleware, syncHistoryWithStore } from "react-router-redux";
import { routerReducer } from "react-router-redux";
import {combineReducers} from 'redux';

const middlewares = [routerMiddleware(browserHistory)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({ routing: routerReducer });

let store = createStore(
  rootReducers,
  undefined,
  composeEnhancers(applyMiddleware(...middlewares))
);

// sagaMiddleware.run(appSagas);

export default store;
