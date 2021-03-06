import React, { forwardRef } from 'react';
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';

export interface TrackProps {
    disabled?: boolean;
    progress: string;
}

const styles = css('Track', {
    background: 'lightgrey',
    borderRadius: 'var(--range-track-height)',
    display: 'block',
    height: 'var(--range-track-height)',
    position: 'relative',
    top: 'calc(50% - var(--range-track-height))',
    '& > div': {
        position: 'absolute',
        height: 'var(--range-track-height)',
        backgroundColor: 'var(--color-primary-base)',
    },
}).modifier('disabled', {
    backgroundColor: 'var(--color-neutral-light)',

    '& > div': {
        backgroundColor: 'var(--color-neutral-light)',
    },
});

const Track = forwardRef<HTMLDivElement, TrackProps>(
    ({ disabled, progress }, ref) => (
        <div ref={ref} css={styles} $disabled={disabled}>
            <div style={{ width: progress }} />
        </div>
    ),
);

export default Track;
