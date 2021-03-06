import React, {
    ReactNode,
    forwardRef,
    KeyboardEventHandler,
    MouseEventHandler,
} from 'react';
// @ts-ignoreE
import { css } from '@trousers/macro';

export interface OverlayProps {
    onKeyDown?: KeyboardEventHandler;
    onClick?: MouseEventHandler;
    children: ReactNode;
}

const styles = css('Overlay', {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
});

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
    ({ children, onKeyDown, onClick }, ref) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            ref={ref}
            // @ts-ignore
            css={styles}
            onKeyDown={onKeyDown}
            onClick={onClick}
        >
            {children}
        </div>
    ),
);

export default Overlay;
