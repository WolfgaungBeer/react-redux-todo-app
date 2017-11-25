import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../../../__mocks__/Wrapper';
import Container from './';

it('renders the Container Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Container>Container</Container>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Container
                position="absolute"
                top="0px"
                left="0px"
                width="100%"
                height="100%"
            >
                Container
            </Container>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <Container
                position="absolute"
                top="0px"
                left="0px"
                width="100%"
                height="100%"
                styles={() => 'background-color: red;'}
            >
                Container
            </Container>
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();
});
