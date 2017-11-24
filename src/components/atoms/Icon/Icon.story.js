/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Icon from './';


storiesOf('Icon', module)
    .add('default', () => (
        <Icon>check_circle</Icon>
    ))
    .add('with props', () => (
        <Icon
            color={text('color', 'success')}
            scale={text('scale', 'l')}
            loading={boolean('loading', false)}
        >
            check_circle
        </Icon>
    ));
