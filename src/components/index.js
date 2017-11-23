import { combineReducers } from 'redux';
import themeReducer from './misc/Theme/reducer';

export const reducer = combineReducers({
    theme: themeReducer,
});

export { default as defaultTheme } from './misc/Theme/initialState';

export * from './misc/Theme/actions';

export * from './atoms';
export * from './misc';
