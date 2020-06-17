import React, { FC, ReactNode } from 'react';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';

export interface CodeProps {
    children: ReactNode;
    inline?: boolean;
}

const preStyles = collector<Theme>('Pre').element`
    & > code {
        display: block;
        padding: 1rem 1.5rem;
        white-space: pre;
        color: ${({ color }) => color.base};
        max-width: 100%;
        overflow-y: auto;
    }
`;

const codeStyles = collector<Theme>('Code').element`
    padding: .2rem .5rem;
    font-size: 90%;
    border-radius: ${({ radius }) => radius[0]};
    background-color: ${({ color }) => color.backgroundAlt};
    color: ${({ color }) => color.base};
`;

const Code: FC<CodeProps> = props => {
    const preClassNames = useStyles(preStyles);
    const codeClassNames = useStyles(codeStyles);

    const codeBlock = <code className={codeClassNames}>{props.children}</code>;

    return props.inline ? (
        codeBlock
    ) : (
        <pre className={preClassNames}>{codeBlock}</pre>
    );
};

export default Code;
