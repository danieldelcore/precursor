/** @jsx jsx */
import {
    ReactNode,
    forwardRef,
    KeyboardEventHandler,
    MouseEventHandler,
} from 'react';
import { jsx, css } from '@trousers/core';

export interface OverlayProps {
    onKeyDown?: KeyboardEventHandler;
    onClick?: MouseEventHandler;
    children: ReactNode;
}

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
    ({ children, onKeyDown, onClick }, ref) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            ref={ref}
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
            onKeyDown={onKeyDown}
            onClick={onClick}
        >
            {children}
        </div>
    ),
);

export default Overlay;
