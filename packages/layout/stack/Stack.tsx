/** @jsx jsx */
import { FC, ReactNode } from 'react';

import { css, jsx } from '@emotion/core';

export interface StackProps {
    children: ReactNode;
}

const Stack: FC<StackProps> = ({ children }) => (
    <div
        css={css`
            display: flex;
            flex-direction: column;

            > * {
                margin-bottom: 1.5rem;
            }
        `}
    >
        {children}
    </div>
);

export default Stack;
