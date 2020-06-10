/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx, css } from '@trousers/core';
import { Theme } from '@precursor/theme';

export interface KeyboardProps {
    children?: ReactNode;
    command?: boolean;
    shift?: boolean;
    option?: boolean;
    ctrl?: boolean;
}

const styles = css<Theme>`
    padding: 0 10px;
    background-color: ${({ colors }) => colors.background};
    border-radius: ${({ radii }) => radii[0]};
    border: ${({ borders }) => borders.base};
    margin-right: 4px;
`;

const Keyboard: FC<KeyboardProps> = ({
    children,
    command,
    shift,
    option,
    ctrl,
}) => (
    <kbd css={styles}>
        {command && '⌘'}
        {shift && '⇧'}
        {option && '⌥'}
        {ctrl && '⌃'}
        {children}
    </kbd>
);

export default Keyboard;
