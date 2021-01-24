import React, { FC, ReactNode, CSSProperties } from 'react';

export interface ColumnProps {
    children: ReactNode;
    span?: number;
    start?: number;
    end?: number;
}

const Column: FC<ColumnProps> = ({ span = 1, start, end, children }) => {
    const styles: CSSProperties = {};

    if (start) styles.gridColumnStart = start;
    if (end) styles.gridColumnEnd = end;
    if (span) styles.gridColumnEnd = `span ${span}`;

    return <div style={styles}>{children}</div>;
};

export default Column;
