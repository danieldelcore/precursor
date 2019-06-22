import React, { FC, ReactNode } from 'react';
import { trousers, useTrousers } from 'trousers';

import { Theme } from '../theme';

export interface Props {
    children: ReactNode;
    inline?: boolean;
}

const preStyles = trousers<{}, {}, Theme>('Pre').element`
    & > code {
        display: block;
        padding: 1rem 1.5rem;
        white-space: pre;
        color: ${({ colors }) => colors.base};
        max-width: 100%;
        overflow-y: auto;
    }
`;

const codeStyles = trousers<{}, {}, Theme>('Code').element`
    padding: .2rem .5rem;
    margin: 0 .2rem;
    font-size: 90%;
    white-space: nowrap;
    border-radius: ${({ radii }) => radii[0]};
    background-color: ${({ colors }) => colors.backgroundAlt};
    color: ${({ colors }) => colors.base};
`;

const Code: FC<Props> = props => {
    const preClassNames = useTrousers(preStyles);
    const codeClassNames = useTrousers(codeStyles);

    const codeBlock = <code className={codeClassNames}>{props.children}</code>;

    return props.inline ? (
        codeBlock
    ) : (
        <pre className={preClassNames}>{codeBlock}</pre>
    );
};

export default Code;
