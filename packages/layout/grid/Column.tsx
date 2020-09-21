/** @jsx jsx */
import { FC, ReactNode, CSSProperties } from 'react';

import { jsx } from '@trousers/core';

export interface ColumnProps {
    children: ReactNode;
    span?: number;
    start?: number;
    end?: number;
}

const Column: FC<ColumnProps> = ({ span = 1, start, end, children }) => {
    const styles: CSSProperties = {};

    if (start) {
        styles.gridColumnStart = start;
    }

    if (end) {
        styles.gridColumnEnd = end;
    }

    if (span) {
        styles.gridColumnEnd = `span ${span}`;
    }

    return <div css={styles}>{children}</div>;
};

export default Column;
