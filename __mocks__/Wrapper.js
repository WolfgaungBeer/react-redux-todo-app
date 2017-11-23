import React from 'react';
import { node } from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // eslint-disable-line
import { Theme, defaultTheme } from '../src/components';

const mockStore = configureStore();
const store = mockStore({ scado: { theme: defaultTheme } });

const propTypes = {
    children: node,
};

const defaultProps = {
    children: undefined,
};

const Wrapper = ({ children }) => (
    <Provider store={store}>
        <Theme>{children}</Theme>
    </Provider>
);

Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;

export default Wrapper;
