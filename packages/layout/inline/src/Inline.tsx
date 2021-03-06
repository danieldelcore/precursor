import React, { Children, FC, ReactNode } from 'react';

import { css } from '@trousers/macro';
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
        css={css('Inline', {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 'calc(var(--inline-gap) * -1)',
            marginLeft: 'calc(var(--inline-gap) * -1)',
            justifyContent: justify,
            '> *': {
                marginTop: 'var(--inline-gap)',
                marginLeft: 'var(--inline-gap)',
                marginBottom: 0,
            },
        }).theme({
            inlineGap: `var(--space-${gap})`,
        })}
    >
        {Children.map(children, child =>
            child !== null && child !== undefined ? <span>{child}</span> : null,
        )}
    </span>
);

export default Inline;
