import React, { FC, ReactNode } from 'react';
import { css } from '@trousers/macro';

import { Theme } from '@precursor/theme';

export interface StackProps {
    children: ReactNode;
    gap?: keyof Theme['space'];
}

const Stack: FC<StackProps> = ({ gap = 'm', children }) => (
    <div
        css={css('Stack', {
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: `var(--space-${gap})`,
            width: '100%',
        })}
    >
        {children}
    </div>
);

export default Stack;
