import React, { FC, ReactNode } from 'react';
import { styleCollector, useStyles } from 'trousers';

export interface Props {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    primary?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
}

const styles = styleCollector<Props, {}, {}>('Button').element`
        display: inline-block;
        height: 38px;
        padding: 0 30px;
        color: #555;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        line-height: 38px;
        letter-spacing: .1rem;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #bbb;
        cursor: pointer;
        margin-bottom: 1rem;

        &:focus,
        &:hover {
            color: #333;
            border-color: #888;
            outline: 0;
        }
    `.modifier(props => !!props!.primary)`
        color: #FFF;
        background-color: #000;
        border-color: #000;

        &:focus,
        &:hover {
            color: #FFF;
            background-color: #000;
            border-color: #000;
        }
    `.modifier(props => !!props!.disabled)`
        filter: grayscale(1);
        cursor: disabled;
        color: #888;

        &:focus,
        &:hover {
            color: #888;
            background-color: #000;
            border-color: #000;
        }
    `;

const Button: FC<Props> = props => {
    const classNames = useStyles(styles, props);

    return (
        <button
            type={props.type}
            className={classNames}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
};

export default Button;
