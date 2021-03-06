import React, { FC, ReactNode } from 'react';
import { css } from '@trousers/macro';
// import { Theme } from '@precursor/theme';

export interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
}

const Label: FC<LabelProps> = ({ htmlFor, children }) => (
    <label
        css={css({
            display: 'inline-flex',
            alignItems: 'center',
            marginBottom: '0',
            fontWeight: 'var(--fontWeight-label)',
            fontSize: 'var(--fontSize-label)',
            cursor: 'pointer',
        })}
        htmlFor={htmlFor}
    >
        {children}
    </label>
);

export default Label;
