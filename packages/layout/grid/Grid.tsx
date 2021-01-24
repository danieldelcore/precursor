import React, { FC, ReactNode } from 'react';

import { css } from '@trousers/macro';
import { Theme } from '@precursor/theme';

export interface GridProps {
    children: ReactNode;
    gap?: keyof Theme['space'];
    columns?: number;
    columnGap?: keyof Theme['space'];
    rowGap?: keyof Theme['space'];
}

const Grid: FC<GridProps> = ({
    columns = 12,
    children,
    gap = 'm',
    columnGap,
    rowGap,
}) => {
    function getGap({ space }: Theme) {
        const column = columnGap ? space[columnGap] : space[gap];
        const row = rowGap ? space[rowGap] : space[gap];

        return `${row} ${column}`;
    }

    return (
        <div
            css={css('Grid', {
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: getGap,
                width: '100%',
            })}
        >
            {children}
        </div>
    );
};

export default Grid;
