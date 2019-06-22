export interface Theme {
    colors: Record<string, string>;
    space: number[];
    shadows: Record<string, string>;
    radii: string[];
    breakpoints: string[];
    mediaQueries: Record<string, string>;
    fontSizes: number[];
    fontWeight: number[];
    fonts: Record<string, string>;
    // lineHeights:;
    // letterSpacings:;
    // borders:;
    zIndices: number[];
}

const breakpoints = ['320px', '768px', '1000px', '1280px'];

const theme: Theme = {
    colors: {
        primary: '#000', // Primary brand colour
        secondary: '#000', // Secondary brand colour
        warning: '#f8b595',
        error: '#f67280',
        base: '#f9f8f9', // Base font colour
        headings: '#f9f8f9', // Heading font colour
        alt: '#000', // Alternate font colour
        background: '#282a36',
        backgroundAlt: '#333543',
    },
    space: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256],
    radii: ['2px', '4px', '8px'],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    fontWeight: [400, 700],
    fonts: {
        base: "'Inconsolata', monospace",
        headings: "'Inconsolata', monospace",
    },
    shadows: {
        small: '0 4px 8px rgba(0, 0, 0, .125)',
        large: '0 6px 14px rgba(0, 0, 0, .125)',
    },
    breakpoints,
    mediaQueries: {
        small: `@media screen and (min-width: ${breakpoints[0]})`,
        medium: `@media screen and (min-width: ${breakpoints[1]})`,
        large: `@media screen and (min-width: ${breakpoints[2]})`,
        xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
    },
    zIndices: [1, 2, 3],
};

export default theme;
