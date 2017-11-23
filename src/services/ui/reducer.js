import initialState from './initialState';
import { TOGGLE_APP_DRAWER } from './actionTypes';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_APP_DRAWER: {
        return { ...state, appDrawerOpen: !state.appDrawerOpen };
    }
    default: {
        return state;
    }
    }
};

export default reducer;
