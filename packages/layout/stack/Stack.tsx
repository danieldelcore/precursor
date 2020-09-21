/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { css, jsx } from '@trousers/core';

import { Theme } from '@precursor/theme';

export interface StackProps {
    children: ReactNode;
    gap?: keyof Theme['space'];
}

const Stack: FC<StackProps> = ({ gap = 'm', children }) => (
    <div
        css={css<Theme>`
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: ${({ space }) => space[gap]};
            width: 100%;
        `}
    >
        {children}
    </div>
);

export default Stack;
