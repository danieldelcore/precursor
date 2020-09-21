import React, { FC, ReactNode } from 'react';
import { css, useStyles } from '@trousers/core';
import { Theme } from '@precursor/theme';

export type Modifier =
    | 'i'
    | 'u'
    | 'abbr'
    | 'cite'
    | 'del'
    | 'em'
    | 'ins'
    | 'kbd'
    | 'mark'
    | 's'
    | 'samp'
    | 'span'
    | 'small'
    | 'strong'
    | 'sub'
    | 'sup';

export interface TextProps {
    children: ReactNode;
    as?: Modifier;
}

const Text: FC<TextProps> = ({ as: modifier = 'p', children }) => {
    const className = useStyles(css<Theme>`
        margin: 0;
    `);

    return React.createElement(modifier, { className }, children);
};

export default Text;
