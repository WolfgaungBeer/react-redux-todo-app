import styled from 'styled-components';

const style = type => props => `
    color: ${props.theme.color[props.color]};
    font-size: ${props.theme.scale[props.scale]};
    font-family: ${props.theme.fonts[type]};
    ${props.styles && props.styles(props)};
`;

const Text = {
    H1: styled.h1`${style('heading')}`,
    H2: styled.h2`${style('heading')}`,
    H3: styled.h3`${style('heading')}`,
    H4: styled.h4`${style('heading')}`,
    H5: styled.h5`${style('heading')}`,
    H6: styled.h6`${style('heading')}`,
    P: styled.p`${style('paragraph')}`,
    A: styled.a`${style('link')}`,
    Label: styled.label`${style('label')}`,
    Span: styled.span`${style('span')}`,
};

export default Text;
