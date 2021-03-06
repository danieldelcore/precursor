import React, { FC, ReactNode } from 'react';
// @ts-ignoreE
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';

export interface MessageProps {
    status?: 'error' | 'success' | 'warning';
    children: ReactNode;
}

const styles = css('message', {
    display: 'block',
    padding: 'var(--spacePreset-inset)',
    borderRadius: 'var(--radius-m)',
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

const Message: FC<MessageProps> = props => (
    <div
        // @ts-ignore
        css={styles}
        $error={props.status === 'error'}
        $warning={props.status === 'warning'}
        $success={props.status === 'success'}
    >
        {props.children}
    </div>
);

export default Message;
