import React, { ReactNode, FC } from 'react';

const Container: FC<{ children?: ReactNode }> = ({ children }) => (
    <div
        style={{
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
