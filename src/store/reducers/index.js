import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import UserReducer from './user';
import Thunk from 'redux-thunk';


const rootReducer = combineReducers({
    user: UserReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(Thunk)));

export default store;