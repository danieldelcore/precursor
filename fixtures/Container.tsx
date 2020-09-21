/** @jsx jsx */
import { jsx } from '@trousers/core';
import { ReactNode, FC } from 'react';

const Container: FC<{ children?: ReactNode }> = ({ children }) => (
    <div
        css={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'block',
            padding: '1rem',
        }}
    >
        {children}
    </div>
);

export default Container;
