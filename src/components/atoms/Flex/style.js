export const getStyle = () => (props) => {
    let display;
    if (!props.flex) display = props.inline ? 'inline-flex' : 'flex';
    return `
        display: ${display};
        flex: ${props.flex};
        justify-content: ${props.justifyContent};
        align-items: ${props.alignItems};
        ${props.styles && props.styles(props)};
    `;
};
