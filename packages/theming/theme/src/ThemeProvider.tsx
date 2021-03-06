import React, { FC, ReactNode } from 'react';
import { css } from '@trousers/macro';

import defaultTheme, { Theme } from './theme';
import Globals from './Globals';

export interface Props {
    theme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ theme = defaultTheme, children }) => (
    <span css={css('Theme', {}) /*.theme(theme)*/}>
        <Globals />
        {children}
    </span>
);

export default ThemeProvider;
