import React, { FC, ReactNode } from 'react';
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';

export interface LozengeProps {
    status?: 'error' | 'success' | 'warning';
    children: ReactNode;
}

const styles = css('Lozenge', {
    display: 'inline-block',
    minWidth: '30px',
    borderRadius: 'var(--radius-m)',
    padding: '2px 8px',
    textAlign: 'center',
    fontSize: 'var(--fontSize-small)',
    backgroundColor: 'var(--color-info-light)',
    color: 'var(--color-info-base)',
    fontWeight: 'bold',
    textTransform: 'uppercase',
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

const Lozenge: FC<LozengeProps> = ({ status, children }) => (
    <span
        css={styles}
        $error={status === 'error'}
        $warning={status === 'warning'}
        $success={status === 'success'}
    >
        {children}
    </span>
);

export default Lozenge;
