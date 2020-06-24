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
        font-size: ${({ fontSize }) => fontSize[1]}px;
        font-weight: ${({ fontWeight }) => fontWeight[1]};
        line-height: 30px;
        letter-spacing: .1rem;
        text-decoration: none;
        white-space: nowrap;
        background-color: ${({ color }) => color.background};
        border-radius: ${({ radius }) => radius[1]};
        border: ${({ border }) =>
            `${border.size[0]} solid ${border.color.base}`};
        cursor: pointer;

        > * {
            pointer-events: none;
        }

        &:focus {
            color: #333;
            border: ${({ border }) =>
                `${border.size[0]} solid ${border.color.focus}`};
            outline: 0;
        }

        &:hover {
            border: ${({ border }) =>
                `${border.size[0]} solid ${border.color.hover}`};
        }

        &:active {
            background-color: ${({ color }) => color.backgroundAlt};
        }
    `.modifier(props.primary)`
        color: #FFF;
        background-color: #000;
        border-color: #000;

        &:hover {
            color: #FFF;
            border: ${({ border }) =>
                `${border.size[0]} solid ${border.color.hover}`};
        }

        &:focus {
            color: #FFF;
        }

        &:active {
            background-color: #444;
        }
    `.modifier(props.disabled)`
        color: #888;
        background-color: ${({ color }: any) => color.backgroundAlt};
        pointer-events: none;
    `.modifier(props.primary && props.disabled)`
        background-color: #000;
    `;

const Button: FC<ButtonProps> = props => (
    <button
        css={styles(props)}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.children}
    </button>
);

Button.defaultProps = {
    type: 'button',
};

export default Button;
