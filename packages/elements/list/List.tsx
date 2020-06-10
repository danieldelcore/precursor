import React, { FC, ReactNode } from 'react';
import { css, useStyles } from '@trousers/core';

export interface ListItemProps {
    children: ReactNode;
}

export const ListItem: FC<ListItemProps> = ({ children }) => (
    <li>{children}</li>
);

export interface ListProps {
    children: ReactNode;
    type: 'ol' | 'ul';
}

const List: FC<ListProps> = ({ type = 'ul', children }) => {
    const classNames = useStyles(css`
        margin: 0 0 1rem 0;
        padding: 0 1rem;
    `);

    return React.createElement(
        type,
        {
            className: classNames,
        },
        children,
    );
};

export default List;
