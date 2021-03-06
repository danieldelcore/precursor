// import { jsx, css } from '@trousers/core';
import React, { ReactNode, FC } from 'react';

// import { Theme } from '@precursor/theme';

const Box: FC<{
    width?: string;
    height?: string;
    children?: ReactNode;
    backgroundColor?: string;
}> = ({ width = '100%', height = 0, children, backgroundColor }) => (
    <div
    // css={css<Theme>`
    //     display: block;
    //     color: white;
    //     min-height: 20px;
    //     width: ${width};
    //     height: ${height};
    //     background-color: ${({ color }) =>
    //         backgroundColor || color.background.light};
    // `}
    >
        {children}
    </div>
);

export default Box;
