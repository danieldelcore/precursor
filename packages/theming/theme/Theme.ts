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
    borders: Record<string, string>; // todo provide better types here
    zIndices: number[];
}

const breakpoints = ['320px', '768px', '1000px', '1280px'];

/** todo: should the properties be plural? if so make them consistent*/
/** todo: should theme be renamed to tokens? A new theme could be created which is how those tokens are applied to every component? */
const theme: Theme = {
    colors: {
        primary: '#000', // Primary brand colour
        secondary: '#000', // Secondary brand colour
        warning: '#f8b595',
        error: '#f67280',
        base: '#454f5b', // Base font colour
        headings: '#161d25', // Heading font colour
        link: '#0070f3',
        alt: '#454f5b', // Alternate font colour
        background: '#fff',
        backgroundAlt: '#eee',
    },
    space: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256],
    radii: ['2px', '4px', '8px'],
    fontSizes: [14, 16, 20, 24, 32, 48, 64],
    fontWeight: [100, 400, 700],
    fonts: {
        base:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
        headings:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
    },
    shadows: {
        small: '0 4px 8px rgba(0, 0, 0, .125)',
        large: '0 6px 14px rgba(0, 0, 0, .125)',
    },
    borders: {
        base: '1px solid #eaeaea',
        focus: '1px solid #33C3F0',
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
