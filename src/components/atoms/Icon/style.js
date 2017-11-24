import styled, { keyframes, css } from 'styled-components';

const rotationKeyframes = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const StyledIcon = styled.i`
    vertical-align: -16%;
    padding: 0 0.15rem;
    color: ${props => props.theme.color[props.color] || 'inherit'};
    font-size: ${props => props.theme.scale[props.scale] || 'inherit'};
    ${props => props.styles && props.styles(props)};
    ${(props) => {
        if (props.loading) {
            return css`
                display: inline-block;
                animation: ${rotationKeyframes} 1s linear infinite;
            `;
        }
        return undefined;
    }};
`;
