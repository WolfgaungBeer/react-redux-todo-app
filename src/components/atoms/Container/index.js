import styled from 'styled-components';
import { string, func, node } from 'prop-types';
import { getStyle } from './style';

const propTypes = {
    position: string,
    top: string,
    left: string,
    right: string,
    bottom: string,
    width: string,
    height: string,
    className: string,
    styles: func,
    children: node,
};

const defaultProps = {
    position: undefined,
    top: undefined,
    left: undefined,
    right: undefined,
    bottom: undefined,
    width: undefined,
    height: undefined,
    className: undefined,
    styles: undefined,
    children: undefined,
};

const Container = styled.div`
    ${getStyle()}
`;

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
