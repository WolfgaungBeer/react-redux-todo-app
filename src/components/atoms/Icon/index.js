import React from 'react';
import { string, node, func } from 'prop-types';
import { StyledIcon } from './style';

const propTypes = {
    color: string,
    scale: string,
    className: string,
    styles: func,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    className: undefined,
    styles: undefined,
    children: undefined,
};

const Icon = ({ color, scale, className, styles, children }) => {
    const classname = `material-icons ${className || ''}`;
    return (
        <StyledIcon className={classname} color={color} scale={scale} styles={styles}>
            {children}
        </StyledIcon>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
