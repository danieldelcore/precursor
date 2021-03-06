import { css } from '@trousers/macro';
import React, { ReactNode, FC } from 'react';

// import { Theme } from '@precursor/theme';

const Box: FC<{
    width?: string;
    height?: string;
    children?: ReactNode;
    backgroundColor?: string;
}> = ({ width = '100%', height = 0, children, backgroundColor }) => (
    <div
        // @ts-ignore
        css={css('Box', {
            display: 'block',
            color: 'white',
            minHeight: '20px',
            width,
            height,
            //     background-color: ${({ color }) =>
            //         backgroundColor || color.background.light};
        })}
    >
        {children}
    </div>
);

export default Box;
