import React, { FC, ReactNode } from 'react';
import { ThemeProvider as CoreThemeProvider } from '@trousers/theme';

import defaultTheme, { Theme } from './theme';
import Globals from './Globals';

export interface Props {
    theme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ theme = defaultTheme, children }) => (
    <CoreThemeProvider theme={theme}>
        <Globals />
        {children}
    </CoreThemeProvider>
);

export default ThemeProvider;
