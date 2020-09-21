import { Theme } from '@precursor/theme';
import { color, space, fontFamily, elevation } from '@precursor/tokens';

interface Text extends Nested {
    type: 'text';
}

interface Option extends Nested {
    type: 'option';
    options: any[];
}

interface Color extends Nested {
    type: 'color';
    options: any[];
}

interface Numeral extends Nested {
    type: 'number';
}

interface Range extends Nested {
    type: 'range';
    min: number;
    max: number;
    step?: number;
}

interface Nested {
    nested?: Record<string, OptionType>;
}

export type OptionType = Text | Color | Option | Numeral | Range;

export type ThemeSchema = Record<keyof Theme, OptionType>;

const allColors = [
    ...Object.values(color.neutral),
    ...Object.values(color.warning),
    ...Object.values(color.error),
    ...Object.values(color.success),
];

const themeSchema: Record<keyof Theme, OptionType> = {
    color: {
        type: 'color',
        options: allColors,
        nested: {
            primary: {
                type: 'color',
                options: Object.values(color.primary),
            },
            typography: {
                type: 'color',
                options: Object.values(color.neutral),
            },
            background: {
                type: 'color',
                options: Object.values(color.neutral),
            },
            neutral: {
                type: 'color',
                options: Object.values(color.neutral),
            },
            info: {
                type: 'color',
                options: Object.values(color.info),
            },
            warning: {
                type: 'color',
                options: Object.values(color.warning),
            },
            error: {
                type: 'color',
                options: Object.values(color.error),
            },
            success: {
                type: 'color',
                options: Object.values(color.success),
            },
        },
    },
    space: {
        type: 'text',
    },
    spacePreset: {
        type: 'option',
        options: Object.values(space),
    },
    font: {
        type: 'option',
        options: [
            ...Object.values(fontFamily),
            'Arial',
            'Helvetica',
            'Comic Sans MS',
            'Verdana',
            'Courier New',
            'Monaco',
            'monospace',
        ],
    },
    fontSize: {
        type: 'text',
    },
    lineHeight: {
        type: 'text',
    },
    fontWeight: {
        type: 'option',
        options: [100, 200, 300, 400, 500, 600, 700],
    },
    radius: {
        type: 'text',
    },
    border: {
        type: 'text',
        nested: {
            color: {
                type: 'color',
                options: allColors,
            },
        },
    },
    breakpoint: { type: 'text' },
    mediaQuery: {
        type: 'text',
    },
    elevation: {
        type: 'option',
        options: Object.values(elevation),
    },
};

export default themeSchema;
