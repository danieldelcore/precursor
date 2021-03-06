import React, { FC, ReactNode } from 'react';

export interface ListItemProps {
    children: ReactNode;
}

export const ListItem: FC<ListItemProps> = ({ children }) => (
    <li>{children}</li>
);

export interface ListProps {
    children: ReactNode;
    type?: 'ol' | 'ul';
}

const List: FC<ListProps> = ({ type = 'ul', children }) =>
    React.createElement(
        type,
        {
            style: {
                margin: '0 0 1rem 0',
                padding: '0 1rem',
            },
        },
        children,
    );

export default List;
