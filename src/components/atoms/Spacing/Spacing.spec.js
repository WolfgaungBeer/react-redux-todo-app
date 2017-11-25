import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../../../../__mocks__/Wrapper';
import Spacing from './';

it('renders the Spacing Component correctly', () => {
    const tree1 = renderer.create(
        <Wrapper>
            <Spacing>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree1).toMatchSnapshot();

    const tree2 = renderer.create(
        <Wrapper>
            <Spacing scale="xl">Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree2).toMatchSnapshot();

    const tree3 = renderer.create(
        <Wrapper>
            <Spacing left>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree3).toMatchSnapshot();

    const tree4 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" top>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree4).toMatchSnapshot();

    const tree5 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" left>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree5).toMatchSnapshot();

    const tree6 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" bottom>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree6).toMatchSnapshot();

    const tree7 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" right>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree7).toMatchSnapshot();

    const tree8 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" top left right bottom>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree8).toMatchSnapshot();

    const tree9 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" styles={() => 'background-color: red;'}>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree9).toMatchSnapshot();

    const tree10 = renderer.create(
        <Wrapper>
            <Spacing scale="xxl" left right styles={() => 'background-color: red;'}>Spacing</Spacing>
        </Wrapper>,
    ).toJSON();
    expect(tree10).toMatchSnapshot();
});
