import {
    color,
    fontSize,
    fontWeight,
    lineHeight,
    space,
    breakpoint,
    fontFamily,
    elevation,
} from '@precursor/tokens';

const theme = {
    color: {
        primary: {
            lighter: color.primary[200],
            light: color.primary[300],
            base: color.primary[400],
            dark: color.primary[600],
            darker: color.primary[700],
        },
        typography: {
            base: color.neutral[800],
            baseInverse: color.neutral[0],
            placeholder: color.neutral[400],
            heading: color.neutral[800],
            label: color.neutral[600],
        },
        background: {
            light: color.neutral[100],
            base: color.neutral[0],
            dark: color.neutral[500],
        },
        neutral: {
            white: color.neutral[0],
            black: color.neutral[900],
            lighter: color.neutral[100],
            light: color.neutral[200],
            base: color.neutral[400],
            dark: color.neutral[600],
            darker: color.neutral[700],
        },
        info: {
            light: color.info[100],
            base: color.info[400],
            dark: color.info[700],
        },
        warning: {
            light: color.warning[100],
            base: color.warning[400],
            dark: color.warning[700],
        },
        error: {
            light: color.error[100],
            base: color.error[400],
            dark: color.error[700],
        },
        success: {
            light: color.success[100],
            base: color.success[400],
            dark: color.success[700],
        },
        link: '#4872e9',
        focus: '#4872e9',
    },
    space: {
        xxs: space[100],
        xs: space[200],
        s: space[300],
        m: space[400],
        l: space[500],
        xl: space[600],
        xxl: space[700],
        xxxl: space[800],
    },
    spacePreset: {
        inset: space[300],
        stack: space[300],
        inline: space[200],
        insetSquish: `${space[200]} ${space[400]}`,
        stretchInset: `${space[400]} ${space[200]}`,
    },
    font: {
        code: fontFamily.monospace,
        base: fontFamily.base,
        heading: fontFamily.base,
    },
    fontSize: {
        h6: fontSize[100],
        h5: fontSize[200],
        h4: fontSize[300],
        h3: fontSize[400],
        h2: fontSize[500],
        h1: fontSize[600],
        base: fontSize[300],
        small: fontSize[200],
        label: fontSize[200],
    },
    lineHeight: {
        h6: lineHeight[100],
        h5: lineHeight[200],
        h4: lineHeight[300],
        h3: lineHeight[400],
        h2: lineHeight[500],
        h1: lineHeight[600],
        base: lineHeight[300],
        label: lineHeight[200],
    },
    fontWeight: {
        heading: fontWeight.bold,
        base: fontWeight.normal,
        label: fontWeight.light,
    },
    /**
     * Revisit this
     * ------
     *  Consider meaningful names...
     *  fields
     *  buttons
     *  containers?
     **/
    radius: {
        s: '2px',
        m: '4px',
        l: '8px',
    },
    // Revisit this
    border: {
        color: {
            base: '#eaeaea',
            hover: '#454f5b',
            focus: '#0070f3',
        },
        size: ['1px', '2px', '3px'],
    },
    breakpoint: {
        mobile: breakpoint[100],
        tablet: breakpoint[200],
        laptop: breakpoint[300],
        desktop: breakpoint[400],
    },
    mediaQuery: {
        mobile: `@media screen and (min-width: ${breakpoint[100]})`,
        tablet: `@media screen and (min-width: ${breakpoint[200]})`,
        laptop: `@media screen and (min-width: ${breakpoint[300]})`,
        desktop: `@media screen and (min-width: ${breakpoint[400]})`,
    },
    elevation: {
        cards: elevation[100],
        popups: elevation[200],
        modals: elevation[300],
        panels: elevation[400],
    },
};

export type Theme = typeof theme;

export default theme;
