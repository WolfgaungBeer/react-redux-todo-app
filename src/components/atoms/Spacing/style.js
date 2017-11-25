export const getStyle = () => (props) => {
    const { scale, top, left, bottom, right, styles } = props;
    const size = `${props.theme.scale[scale] || props.theme.scale.m}`;
    const pos = (!top && !left && !right && !bottom) ? 'top' : undefined;
    if (pos) return `padding-${pos}: ${size}`;
    return `
        ${top && 'padding-top: '} ${size};
        ${left && 'padding-left: '} ${size};
        ${right && 'padding-right: '} ${size};
        ${bottom && 'padding-bottom: '} ${size};
        ${styles && styles(props)};
    `;
};
