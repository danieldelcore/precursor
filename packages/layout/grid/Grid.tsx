/** @jsx jsx */
import { FC, ReactNode } from 'react';

import { css, jsx } from '@trousers/core';

export interface GridProps {
    children: ReactNode;
    gap?: number;
    columns?: number;
}

const Grid: FC<GridProps> = ({ columns = 3, children }) => (
    <div
        css={css`
            display: grid;
            grid-template-columns: repeat(${columns}, 1fr);
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        `}
    >
        {children}
    </div>
);

export default Grid;
