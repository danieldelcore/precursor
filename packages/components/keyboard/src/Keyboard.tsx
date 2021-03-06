import React, { FC, ReactNode } from 'react';
// @ts-ignoreE
import { css } from '@trousers/macro';
// import { Theme } from '@precursor/theme';

export interface KeyboardProps {
    children?: ReactNode;
    command?: boolean;
    shift?: boolean;
    option?: boolean;
    ctrl?: boolean;
}

const styles = css({
    padding: '0 10px',
    backgroundColor: 'var(--color-background-light)',
    borderRadius: 'var(--radius-s)',
    border: `var(--border-size-0) solid var(--border-color-base)`,
});

const Keyboard: FC<KeyboardProps> = ({
    children,
    command,
    shift,
    option,
    ctrl,
}) => (
    <kbd
        // @ts-ignore
        css={styles}
    >
        {command && '⌘'}
        {shift && '⇧'}
        {option && '⌥'}
        {ctrl && '⌃'}
        {children}
    </kbd>
);

export default Keyboard;
