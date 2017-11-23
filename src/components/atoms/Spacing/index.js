import styled from 'styled-components';
import { string, bool, node, func } from 'prop-types';
import { getStyle } from './style';

const propTypes = {
    scale: string,
    top: bool,
    left: bool,
    bottom: bool,
    right: bool,
    className: string,
    styles: func,
    children: node,
};

const defaultProps = {
    scale: undefined,
    top: undefined,
    left: undefined,
    bottom: undefined,
    right: undefined,
    className: undefined,
    styles: undefined,
    children: undefined,
};

const Spacing = styled.div`
    ${getStyle()}
`;

Spacing.propTypes = propTypes;
Spacing.defaultProps = defaultProps;

export default Spacing;
