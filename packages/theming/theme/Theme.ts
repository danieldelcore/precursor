export interface Theme {
    color: Record<string, string>;
    space: number[];
    shadow: Record<string, string>;
    radius: string[];
    breakpoint: string[];
    mediaQuery: Record<string, string>;
    fontSize: number[];
    fontWeight: number[];
    font: Record<string, string>;
    border: {
        color: {
            base: string;
            hover: string;
            focus: string;
        };
        size: string[];
    };
    level: number[];
}

const breakpoint = ['320px', '768px', '1000px', '1280px'];

/** todo: should the properties be plural? if so make them consistent*/
/** todo: should theme be renamed to tokens? A new theme could be created which is how those tokens are applied to every component? */
const theme: Theme = {
    color: {
        primary: '#000', // Primary brand colour
        secondary: '#000', // Secondary brand colour
        warning: '#f8b595',
        error: '#f67280',
        base: '#454f5b', // Base font colour
        headings: '#161d25', // Heading font colour
        link: '#4872e9',
        focus: '#4872e9',
        alt: '#454f5b', // Alternate font colour
        background: '#fff',
        backgroundAlt: '#eee',
    },
    space: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256],
    radius: ['2px', '4px', '8px'],
    fontSize: [14, 16, 20, 24, 32, 48, 64],
    fontWeight: [100, 400, 700],
    font: {
        base:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
        headings:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
    },
    shadow: {
        small: '0 4px 8px rgba(0, 0, 0, .125)',
        large: '0 6px 14px rgba(0, 0, 0, .125)',
    },
    border: {
        color: {
            base: '#eaeaea',
            hover: '#454f5b',
            focus: '#0070f3',
        },
        size: ['1px', '2px', '3px'],
    },
    breakpoint,
    mediaQuery: {
        small: `@media screen and (min-width: ${breakpoint[0]})`,
        medium: `@media screen and (min-width: ${breakpoint[1]})`,
        large: `@media screen and (min-width: ${breakpoint[2]})`,
        xlarge: `@media screen and (min-width: ${breakpoint[3]})`,
    },
    level: [1, 2, 3],
};

export default theme;
