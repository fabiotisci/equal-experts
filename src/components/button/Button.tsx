import * as React from 'react';
import './Button.css';

interface IButtonProps {
    children?: any;
    classes: string[];
    tabIndex?: number;
    clicked: () => void;
}

export const Button: React.SFC<IButtonProps> = (props): JSX.Element => (
    <button
        tabIndex={props.tabIndex}
        className={ ['Button', ...props.classes].join(' ') }
        onClick={props.clicked}>{props.children}</button>
);

