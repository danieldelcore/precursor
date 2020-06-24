/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx, css } from '@trousers/core';

export interface BadgeProps {
    children: ReactNode;
}

const Badge: FC<BadgeProps> = ({ children }) => (
    <span
        css={css`
            display: inline-block;
            box-sizing: border-box;
            min-width: 30px;
            border-radius: 15px;
            padding: 2px 6px;
            text-align: center;
            font-size: 0.8rem;
            color: #bf2600;
            background-color: #ffebe6;
        `}
    >
        {children}
    </span>
);

export default Badge;
