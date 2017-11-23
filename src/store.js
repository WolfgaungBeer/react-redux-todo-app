import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'; // eslint-disable-line
import { reducer as scadoReducers, setTheme } from 'scado';
import { reducer as uiReducer } from 'uiSvc';
import theme from './theme';

const reducers = combineReducers({
    scado: scadoReducers,
    ui: uiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(reducers, composeEnhancers(applyMiddleware(logger)));

store.dispatch(setTheme(theme));

export default store;
