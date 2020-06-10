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
    | 'sub'
    | 'sup';

export interface TextProps {
    children: ReactNode;
    as: Modifier;
}

const Text: FC<TextProps> = ({ as: modifier, children }) =>
    React.createElement(modifier || 'p', {}, children);

export default Text;
