/** @jsx jsx */
import { FC, ReactNode } from 'react';

import { css, jsx } from '@trousers/core';

export interface RowProps {
    children: ReactNode;
}

const Row: FC<RowProps> = ({ children }) => (
    <div
        css={css`
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 0px;
            grid-column-end: span 12;
        `}
    >
        {children}
    </div>
);

export default Row;
