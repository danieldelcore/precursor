import React, { FC, ReactNode } from 'react';
// // @ts-ignore
// import { css } from '@trousers/macro';

// import defaultTheme, { Theme } from './theme';
// import Globals from './Globals';

export interface Props {
    theme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ /*theme = defaultTheme,*/ children }) => (
    // @ts-ignore
    // <span css={css('Theme', {}).theme(theme)}>
    // <Globals />
    <span>{children}</span>
    // </span>
);

export default ThemeProvider;
