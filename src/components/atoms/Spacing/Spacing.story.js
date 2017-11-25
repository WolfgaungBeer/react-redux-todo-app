/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Spacing from './';


storiesOf('Spacing', module)
    .add('default', () => (
        <Spacing>Spacing</Spacing>
    ))
    .add('with props', () => (
        <Spacing
            scale={text('scale', 'l')}
            top={boolean('top', true)}
            left={boolean('left', false)}
            right={boolean('right', false)}
            bottom={boolean('bottom', false)}
        >
            Spacing
        </Spacing>
    ));
