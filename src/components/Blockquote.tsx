/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@trousers/core';

import { Theme } from '../theme';

export interface BlockquoteProps {
    children: string;
    cite?: string;
}

const Blockquote: FC<BlockquoteProps> = ({ cite, children }) => (
    <blockquote
        css={css<Theme>`
            padding: 0.2rem 0.5rem;
            margin: 0 0.2rem;
            color: ${({ colors }) => colors.base};
            padding: 0 1em;
            color: #6a737d;
            border-left: 0.25em solid #dfe2e5;
        `}
        cite={cite}
    >
        {children}
    </blockquote>
);

export default Blockquote;
