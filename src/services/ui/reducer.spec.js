import reducer from './reducer';
import initialState from './initialState';
import { toggleAppDrawer } from './';


it('should return the initial state of the reducer', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual(initialState);
});

it('should update the state correctly on the \'toggleAppDrawer\' action', () => {
    const newState = reducer(initialState, toggleAppDrawer());
    expect(newState).toEqual({ ...initialState, appDrawerOpen: !initialState.appDrawerOpen });
});
