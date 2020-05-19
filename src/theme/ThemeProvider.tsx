import React, { FC, ReactNode } from 'react';
import { ThemeProvider as CoreThemeProvider } from '@trousers/theme';

import { theme as defaultTheme, Theme, Globals } from './';

export interface Props {
    theme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ theme = defaultTheme, children }) => {
    return (
        <CoreThemeProvider theme={theme}>
            <Globals />
            {children}
        </CoreThemeProvider>
    );
};

export default ThemeProvider;
