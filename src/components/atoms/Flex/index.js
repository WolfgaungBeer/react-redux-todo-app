import styled from 'styled-components';
import { bool, string, func, node } from 'prop-types';
import { getStyle } from './style';

const propTypes = {
    inline: bool,
    flex: string,
    justifyContent: string,
    alignItems: string,
    className: string,
    styles: func,
    children: node,
};

const defaultProps = {
    inline: undefined,
    flex: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    className: undefined,
    styles: undefined,
    children: undefined,
};

const Flex = styled.div`
    ${getStyle()}
`;

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

export default Flex;
