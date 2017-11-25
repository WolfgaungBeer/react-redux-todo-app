/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Container from './';


storiesOf('Container', module)
    .add('default', () => (
        <Container>Container</Container>
    ))
    .add('with props', () => (
        <Container
            position={text('position', 'relative')}
            top={text('top', '0px')}
            left={text('left', '0px')}
            right={text('right', '0px')}
            bottom={text('bottom', '0px')}
            width={text('width', '100%')}
            height={text('height', '100%')}
        >
            Container
        </Container>
    ));
