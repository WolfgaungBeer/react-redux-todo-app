import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Theme } from 'scado';
import App from './scenes/App';
import store from './store';
import './global.css';

const Root = () => (
    <Provider store={store}>
        <Theme>
            <App />
        </Theme>
    </Provider>
);

render(<Root />, document.getElementById('root'));
