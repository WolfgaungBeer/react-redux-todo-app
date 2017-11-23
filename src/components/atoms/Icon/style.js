import styled from 'styled-components';

export const StyledIcon = styled.i`
    vertical-align: -16%;
    padding: 0 0.15rem;
    color: ${props => props.theme.color[props.color] || 'inherit'};
    font-size: ${props => props.theme.scale[props.scale] || 'inherit'};
    ${props => props.styles && props.styles(props)};
`;
