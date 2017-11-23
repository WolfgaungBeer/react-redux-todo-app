import { combineReducers } from 'redux';
import themeReducer from './misc/Theme/reducer';

export const reducer = combineReducers({
    theme: themeReducer,
});

export * from './misc/Theme/actions';

export * from './atoms';
export * from './misc';
