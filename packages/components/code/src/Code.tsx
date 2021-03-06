import React, { FC, ReactNode } from 'react';
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';

export interface CodeProps {
    children: ReactNode;
    inline?: boolean;
}

const preStyles = css('Pre', {
    margin: 0,
    '& > code': {
        display: 'block',
        padding: '1rem 1.5rem',
        whiteSpace: 'pre',
        maxWidth: '100%',
        overflowY: 'auto',
        color: 'var(--color-typography-base)',
        fontFamily: 'var(--font-code)',
    },
});

const codeStyles = css('Code', {
    padding: '.2rem .5rem',
    fontSize: '90%',
    borderRadius: 'var(--radius-s)',
    backgroundColor: 'var(--color-background-light)',
    color: 'var(--color-typography-base)',
    fontFamily: 'var(--font-code)',
});

const Code: FC<CodeProps> = props => {
    const codeBlock = <code css={codeStyles}>{props.children}</code>;

    return props.inline ? codeBlock : <pre css={preStyles}>{codeBlock}</pre>;
};

export default Code;
