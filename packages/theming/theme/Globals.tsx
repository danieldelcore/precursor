import { FC } from 'react';
import { css, useGlobals } from '@trousers/core';

import { Theme } from './Theme';

const reset = css`
    * {
        box-sizing: border-box;
    }
`;

const typography = css<Theme>`
    body {
        font-family: ${({ font }) => font.base};
        font-size: ${({ fontSize }) => fontSize[1]}px;
        color: ${({ color }) => color.base};
    }
`;

const Globals: FC = () => {
    useGlobals<Theme>(reset);
    useGlobals<Theme>(typography);

    return null;
};

export default Globals;
