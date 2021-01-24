import React, { FC } from 'react';
import { css } from '@trousers/macro';
// import { Theme } from '@precursor/theme';

export interface SkeletonProps {
    as?: 'image' | 'text' | 'avatar';
    height?: string;
}

const Skeleton: FC<SkeletonProps> = ({ as = 'text', height }) => (
    <div
        css={css('skeleton', {
            backgroundColor: 'var(--color-background-light)',
            height: '1rem',
            animation: 'precursor-pulse 1.5s ease-in-out 0.5s infinite',
            '@keyframes precursor-pulse': {
                '0%': {
                    opacity: 1,
                },
                '50%': {
                    opacity: 0.4,
                },
                '100%': {
                    opacity: 1,
                },
            },
        })
            .modifier('isText', {
                width: '100%',
                borderRadius: 'var(--radius-s)',
            })
            .modifier('isImage', {
                width: '100%',
                paddingTop: `${height || '56.25%'}`,
            })
            .modifier('isAvatar', {
                width: '64px',
                height: '64px',
                borderRadius: '100%',
            })}
        $isText={as === 'text'}
        $isImage={as === 'image'}
        $isAvatar={as === 'avatar'}
    />
);

export default Skeleton;
