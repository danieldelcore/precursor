/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx, css } from '@trousers/core';
import { Theme } from '@precursor/theme';

export interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
}

const Label: FC<LabelProps> = ({ htmlFor, children }) => (
    <label
        css={css<Theme>`
            display: inline-flex;
            align-items: center;
            margin-bottom: 0;
            font-weight: ${({ fontWeight }) => fontWeight.label};
            font-size: ${({ fontSize }) => fontSize.label};
            cursor: pointer;
        `}
        htmlFor={htmlFor}
    >
        {children}
    </label>
);

export default Label;
