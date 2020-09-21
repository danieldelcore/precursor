/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';
import { Theme } from '@precursor/theme';

export interface SkeletonProps {
    as?: 'image' | 'text' | 'avatar';
    height?: string;
}

const getStyles = (props: SkeletonProps) =>
    collector<Theme>('skeleton').element`
    background-color: ${({ color }) => color.background.light};
    height: 1rem;
    animation: precursor-pulse 1.5s ease-in-out 0.5s infinite;

    @keyframes precursor-pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.4;
        }
        100% {
            opacity: 1;
        }
    }
`.modifier(props.as === 'text')`
    width: 100%;
    border-radius: ${({ radius }) => radius.s}
`.modifier(props.as === 'image')`
    width: 100%;
    padding-top: ${props.height || '56.25%'};
`.modifier(props.as === 'avatar')`
    width: 64px;
    height: 64px;
    border-radius: 100%;
`;

const Skeleton: FC<SkeletonProps> = ({ as = 'text', height }) => (
    <div css={getStyles({ as, height })} />
);

export default Skeleton;
