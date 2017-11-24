import React from 'react';
import { string, node, bool, func } from 'prop-types';
import { StyledIcon } from './style';

const propTypes = {
    color: string,
    scale: string,
    loading: bool,
    className: string,
    styles: func,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    loading: undefined,
    className: undefined,
    styles: undefined,
    children: undefined,
};

const Icon = ({ color, scale, loading, className, styles, children }) => {
    const classname = `material-icons ${className || ''}`;
    const iconValue = loading ? 'settings' : children;
    return (
        <StyledIcon className={classname} color={color} scale={scale} styles={styles} loading={loading}>
            {iconValue}
        </StyledIcon>
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
