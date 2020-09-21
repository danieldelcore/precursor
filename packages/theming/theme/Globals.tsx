import { FC } from 'react';
import { css, useGlobals } from '@trousers/core';

import { Theme } from './theme';

const reset = css`
    * {
        box-sizing: border-box;
    }
`;

const typography = css<Theme>`
    html,
    body {
        margin: 0px;
        padding: 0px;
    }

    body {
        font-family: ${({ font }) => font.base};
        font-size: ${({ fontSize }) => fontSize.base};
        line-height: ${({ lineHeight }) => lineHeight.base};
        color: ${({ color }) => color.typography.base};
        background-color: ${({ color }) => color.background.base};
    }
`;

const Globals: FC = () => {
    useGlobals<Theme>(reset);
    useGlobals<Theme>(typography);

    return null;
};

export default Globals;
