/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx, css } from '@trousers/core';

export interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
}

const Label: FC<LabelProps> = props => (
    <label
        css={css`
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            width: 100%;
        `}
        htmlFor={props.htmlFor}
    >
        {props.children}
    </label>
);

export default Label;
