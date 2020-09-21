import React, { FC, ReactNode } from 'react';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';

export interface CodeProps {
    children: ReactNode;
    inline?: boolean;
}

const preStyles = collector<Theme>('Pre').element`
    margin: 0;

    & > code {
        display: block;
        padding: 1rem 1.5rem;
        white-space: pre;
        max-width: 100%;
        overflow-y: auto;
        color: ${({ color }) => color.typography.base};
        font-family: ${({ font }) => font.code};
    }
`;

const codeStyles = collector<Theme>('Code').element`
    padding: .2rem .5rem;
    font-size: 90%;
    border-radius: ${({ radius }) => radius.s};
    background-color: ${({ color }) => color.background.light};
    color: ${({ color }) => color.typography.base};
    font-family: ${({ font }) => font.code};
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
