/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';

export interface ButtonProps {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    primary?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
}

const styles = (props: ButtonProps) => collector<Theme>('Button').element`
        display: inline-block;
        height: 30px;
        padding: 0 22px;
        color: #555;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: .1rem;
        text-decoration: none;
        white-space: nowrap;
        background-color: #fff;
        border-radius: ${({ radii }) => radii[1]};
        border: ${({ borders }) => borders.base};
        cursor: pointer;
        margin-bottom: 1rem;

        &:focus,
        &:hover {
            color: #333;
            border: ${({ borders }) => borders.focus};
            outline: 0;
        }
    `.modifier(props.primary)`
        color: #FFF;
        background-color: #000;
        border-color: #000;

        &:focus,
        &:hover {
            color: #FFF;
            background-color: #000;
            border-color: #000;
        }
    `.modifier(props.disabled)`
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

const Button: FC<ButtonProps> = props => (
    <button css={styles(props)} type={props.type} onClick={props.onClick}>
        {props.children}
    </button>
);

Button.defaultProps = {
    type: 'button',
};

export default Button;
