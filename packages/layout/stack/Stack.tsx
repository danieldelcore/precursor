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

            > :last-child {
                margin-bottom: 0;
            }
        `}
    >
        {children}
    </div>
);

export default Stack;
