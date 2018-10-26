import * as React from 'react';

const style: React.CSSProperties = {
    width: '100%',
    lineHeight: '70px',
    padding: '0',
    textAlign: 'right',
    fontSize: '50px',
    border: '0'
}

interface InputProps {
    value?: string | number;
    disabled?: boolean;
    placeholder?: string;
}

export const Input: React.SFC<InputProps> = (props): JSX.Element => (
    <input
        readOnly={true}
        style={style}
        value={props.value}
        disabled={props.disabled}
        placeholder={props.placeholder} />
);

