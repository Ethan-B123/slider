import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

export default (preloadedState) => createStore(rootReducer, preloadedState, applyMiddleware(logger));