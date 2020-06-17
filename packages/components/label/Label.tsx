/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx, css } from '@trousers/core';
import { Theme } from '@precursor/theme';

export interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
}

const Label: FC<LabelProps> = props => (
    <label
        css={css<Theme>`
            display: block;
            margin-bottom: 0.5rem;
            font-weight: ${({ fontWeight }) => fontWeight[1]};
            font-size: ${({ fontSize }) => fontSize[0]};
        `}
        htmlFor={props.htmlFor}
    >
        {props.children}
    </label>
);

export default Label;
