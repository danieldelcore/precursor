import React, { FC, ReactNode } from 'react';
import { styleCollector, useStyles } from 'trousers';

export interface Props {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    primary?: boolean;
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
        background-color: transparent;
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
        background-color: #33C3F0;
        border-color: #33C3F0;

        &:focus,
        &:hover {
            color: #FFF;
            background-color: #1EAEDB;
            border-color: #1EAEDB;
        }
    `;

const Button: FC<Props> = props => {
    const classNames = useStyles(styles, props);

    return (
        <button type={props.type} className={classNames}>
            {props.children}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
};

export default Button;
