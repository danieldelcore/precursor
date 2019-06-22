import React, { FC } from 'react';
import { trousers, useTrousers } from 'trousers';

import { Theme } from '../theme';

export interface Props {
    children: string;
    cite?: string;
}

const styles = trousers<{}, {}, Theme>('Blockquote').element`
    padding: .2rem .5rem;
    margin: 0 .2rem;
    color: ${({ colors }) => colors.base};
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
`;

const Blockquote: FC<Props> = ({ cite, children }) => {
    const classNames = useTrousers(styles);

    return (
        <blockquote className={classNames} cite={cite}>
            {children}
        </blockquote>
    );
};

export default Blockquote;
