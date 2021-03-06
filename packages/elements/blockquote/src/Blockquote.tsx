import React, { FC } from 'react';
// @ts-ignoreE
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';

export interface BlockquoteProps {
    children: string;
    cite?: string;
}

const styles = css('Blockquote', {
    padding: '0.2rem 0.5rem',
    margin: '0 0.2rem',
    color: 'var(--color-typography-base)',
    borderLeft: '0.25em solid #dfe2e5',
});

const Blockquote: FC<BlockquoteProps> = ({ cite, children }) => (
    // @ts-ignore
    <blockquote css={styles} cite={cite}>
        {children}
    </blockquote>
);

export default Blockquote;
