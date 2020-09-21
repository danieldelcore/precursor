/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';

export interface BadgeProps {
    status?: 'error' | 'success' | 'warning';
    children: ReactNode;
}

const styles = (status: BadgeProps['status']) => collector<Theme>('Badge')
    .element`
    display: inline-block;
    min-width: 30px;
    border-radius: 1rem;
    padding: 2px 6px;
    text-align: center;
    font-size: ${({ fontSize }) => fontSize.small};
    background-color: ${({ color }) => color.info.light};
    color: ${({ color }) => color.info.base};
`.modifier('error', status === 'error')`
    background-color: ${({ color }) => color.error.light};
    color: ${({ color }) => color.error.base};
`.modifier('warning', status === 'warning')`
    background-color: ${({ color }: Theme) => color.warning.light};
    color: ${({ color }: Theme) => color.warning.base};
`.modifier('success', status === 'success')`
    background-color: ${({ color }: Theme) => color.success.light};
    color: ${({ color }: Theme) => color.success.base};
`;

const Badge: FC<BadgeProps> = ({ status, children }) => (
    <span css={styles(status)}>{children}</span>
);

export default Badge;
