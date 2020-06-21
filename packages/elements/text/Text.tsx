import React, { FC, ReactNode } from 'react';

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
    | 'sub'
    | 'sup';

export interface TextProps {
    children: ReactNode;
    as?: Modifier;
}

const Text: FC<TextProps> = ({ as: modifier = 'p', children }) =>
    React.createElement(modifier, {}, children);

export default Text;
