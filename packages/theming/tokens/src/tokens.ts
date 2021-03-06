const unit = 8;

/**
 * Color
 */
export const color = {
    primary: {
        0: '#F0F5FF',
        100: '#E5EDFF',
        200: '#CDDBFE',
        300: '#B4C6FC',
        400: '#8DA2FB',
        500: '#6875F5',
        600: '#5850EC',
        700: '#5145CD',
        800: '#42389D',
        900: '#362F78',
    },
    info: {
        100: '#dcf2ff',
        400: '#134f83',
        700: '#134f83',
    },
    warning: {
        100: '#fffac6',
        400: '#7e7015',
        700: '#7e7015',
    },
    error: {
        100: '#fad6d6',
        400: '#bb2525',
        700: '#7c0404',
    },
    success: {
        100: '#d8ffd8',
        400: '#137043',
        700: '#137043',
    },
    neutral: {
        0: '#FBFDFE',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CFD8E3',
        400: '#97A6BA',
        500: '#64748B',
        600: '#475569',
        700: '#364152',
        800: '#27303F',
        900: '#1A202E',
    },
};

/**
 * Typography
 */
export const fontSize = {
    100: '8px',
    200: '12px',
    300: '16px',
    400: '22px',
    500: '28px',
    600: '36px',
    700: '48px',
};

export const lineHeight = {
    100: `${unit}px`,
    200: `calc(${unit}px * 2)`,
    300: `calc(${unit}px * 3)`,
    400: `calc(${unit}px * 4)`,
    500: `calc(${unit}px * 5)`,
    600: `calc(${unit}px * 6)`,
    700: `calc(${unit}px * 7)`,
};

// ## Font weight
export const fontWeight = {
    light: 100,
    normal: 400,
    bold: 700,
};

export const fontFamily = {
    base:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
    monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
};

/**
 * Spacing
 */
const spaceIncrement = 2;
const space100 = unit / spaceIncrement;
const space200 = unit;
const space300 = unit * spaceIncrement;
const space400 = space300 * spaceIncrement;
const space500 = space400 * spaceIncrement;
const space600 = space500 * spaceIncrement;
const space700 = space600 * spaceIncrement;
const space800 = space700 * spaceIncrement;

export const space = {
    100: space100 + 'px',
    200: space200 + 'px',
    300: space300 + 'px',
    400: space400 + 'px',
    500: space500 + 'px',
    600: space600 + 'px',
    700: space700 + 'px',
    800: space800 + 'px',
};

/**
 * Breakpoints
 */
export const breakpoint = {
    100: '320px',
    200: '768px',
    300: '1000px',
    400: '1280px',
};

/**
 * Elevation
 */
export const elevation = {
    100: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
    200: '0 2px 8px hsla(0, 0%, 0%, 0.16)',
    300: '0 4px 16px hsla(0, 0%, 0%, 0.16)',
    400: '0 8px 24px hsla(0, 0%, 0%, 0.16)',
};
