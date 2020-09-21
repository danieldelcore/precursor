/** @jsx jsx */
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';
import { forwardRef } from 'react';

import { Theme } from '@precursor/theme';

export interface TrackProps {
    disabled?: boolean;
    progress: string;
}

const styles = (disabled: TrackProps['disabled']) =>
    collector<Theme>('Track').element`
        background: lightgrey;
        border-radius: var(--range-track-height);
        display: block;
        height: var(--range-track-height);
        position: relative;
        top: calc(50% - var(--range-track-height));

        & > div {
            position: absolute;
            height: var(--range-track-height);
            background-color: ${({ color }) => color.primary.base};
        }
    `.modifier('disabled', disabled)`
        background-color: ${({ color }) => color.neutral.light};

        & > div {
            background-color: ${({ color }) => color.neutral.light};
        }
    `;

const Track = forwardRef<HTMLDivElement, TrackProps>(
    ({ disabled, progress }, ref) => (
        <div ref={ref} css={styles(disabled)}>
            <div
                style={{
                    width: progress,
                }}
            />
        </div>
    ),
);

export default Track;
