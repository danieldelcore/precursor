/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx, css } from '@trousers/core';

export interface OverlayProps {
    children: ReactNode;
}

const Overlay: FC<OverlayProps> = ({ children }) => (
    <div
        css={css`
            display: flex;
            align-content: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.6);
        `}
    >
        {children}
    </div>
);

export default Overlay;
