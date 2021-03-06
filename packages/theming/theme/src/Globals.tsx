import React, { FC } from 'react';
// @ts-ignoreE
import { css } from '@trousers/macro';

// import { Theme } from './theme';

const reset = css({}).global({
    '*': {
        boxSizing: 'border-box',
    },
    'html, body': {
        margin: '0px',
        padding: '0px',
    },
    body: {
        fontFamily: 'var(--font-base}',
        fontSize: 'var(--fontSize-base}',
        lineHeight: 'var(--lineHeight-base}',
        color: 'var(--color-typography-base}',
        backgroundColor: 'var(--color-background-base}',
    },
});

const Globals: FC = () => {
    // @ts-ignore
    return <span css={reset} />; // TODO: this isn't great
};

export default Globals;
