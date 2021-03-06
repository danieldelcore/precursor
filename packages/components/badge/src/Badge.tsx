import React, { FC, ReactNode } from 'react';
// @ts-ignore
// @ts-ignoreE
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';

export interface BadgeProps {
    status?: 'error' | 'success' | 'warning';
    children: ReactNode;
}

const styles = css('Badge', {
    display: 'inline-block',
    minWidth: '30px',
    borderRadius: '1rem',
    padding: '2px 6px',
    textAlign: 'center',
    fontSize: 'var(--fontSize-small)',
    backgroundColor: 'var(--color-info-light)',
    color: 'var(--color-info-base)',
})
    .modifier('error', {
        backgroundColor: 'var(--color-error-light)',
        color: 'var(--color-error-base)',
    })
    .modifier('warning', {
        backgroundColor: 'var(--color-warning-light)',
        color: 'var(--color-warning-base)',
    })
    .modifier('success', {
        backgroundColor: 'var(--color-success-light)',
        color: 'var(--color-success-base)',
    });

const Badge: FC<BadgeProps> = ({ status, children }) => (
    <span
        // @ts-ignore
        css={styles}
        $error={status === 'error'}
        $warning={status === 'warning'}
        $success={status === 'success'}
    >
        {children}
    </span>
);

export default Badge;
