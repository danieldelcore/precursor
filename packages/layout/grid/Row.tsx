import React, { FC, ReactNode } from 'react';

import { css } from '@trousers/macro';

export interface RowProps {
    children: ReactNode;
}

const Row: FC<RowProps> = ({ children }) => (
    <div
        css={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '0px',
            gridColumnEnd: 'span 12',
        })}
    >
        {children}
    </div>
);

export default Row;
