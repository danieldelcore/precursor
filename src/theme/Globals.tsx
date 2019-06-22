import { FC, useEffect } from 'react';
import { css, useGlobal } from 'trousers';

import { Theme } from './';

const reset = css`
    @import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap');

    * {
        box-sizing: border-box;
    }
`;

const typography = css<Theme>`
    html,
    body {
        background-color: ${({ colors }) => colors.background};
    }

    body {
        font-family: ${({ fonts }) => fonts.base};
        font-size: ${({ fontSizes }) => fontSizes[1]}px;
        color: ${({ colors }) => colors.base};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${({ fonts }) => fonts.headings};
        font-weight: ${({ fontWeight }) => fontWeight[0]};
        color: ${({ colors }) => colors.headings};
    }
`;

const Globals: FC<{}> = () => {
    const [clearStyles] = useGlobal<Theme>(reset);
    const [clearTypog] = useGlobal<Theme>(typography);

    useEffect(
        () => () => {
            clearStyles();
            clearTypog();
        },
        [],
    );

    return null;
};

export default Globals;
