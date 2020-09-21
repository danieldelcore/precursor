/** @jsx jsx */
import { Children, FC, ReactNode } from 'react';

import { css, jsx } from '@trousers/core';
import { Theme } from '@precursor/theme';

export interface InlineProps {
    children: ReactNode;
    justify?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    gap?: keyof Theme['space'];
}

const Inline: FC<InlineProps> = ({
    children,
    gap = 's',
    justify = 'flex-start',
}) => (
    <span
        css={css<Theme>`
            --inline-gap: ${({ space }) => space[gap]};
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: calc(var(--inline-gap) * -1);
            margin-left: calc(var(--inline-gap) * -1);
            justify-content: ${justify};

            > * {
                margin-top: var(--inline-gap);
                margin-left: var(--inline-gap);
                margin-bottom: 0;
            }
        `}
    >
        {Children.map(children, child =>
            child !== null && child !== undefined ? <span>{child}</span> : null,
        )}
    </span>
);

export default Inline;
