import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Theme, defaultTheme } from '../src/components';
import '../src/global.css';

const loadStories = () => {
    require('../src/components/atoms/Container/Container.story.js');
    require('../src/components/atoms/Flex/Flex.story.js');
    require('../src/components/atoms/Icon/Icon.story.js');
    require('../src/components/atoms/Spacing/Spacing.story.js');
    require('../src/components/atoms/Text/Text.story.js');
};

const mockStore = configureStore();
const store = mockStore({ scado: { theme: defaultTheme } });

const GlobalDecorator = storyFn => (
    <Provider store={store}>
        <Theme>
            {storyFn()}
        </Theme>
    </Provider>
);

addDecorator(GlobalDecorator);
addDecorator(withKnobs);
configure(loadStories, module);
