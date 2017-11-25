export const getStyle = () => (props) => {
    const { position, top, left, bottom, right, width, height, styles } = props;
    return `
        position: ${position};
        top: ${top};
        left: ${left};
        right: ${right};
        bottom: ${bottom};
        width: ${width};
        height: ${height};
        ${styles && styles(props)};
    `;
};
