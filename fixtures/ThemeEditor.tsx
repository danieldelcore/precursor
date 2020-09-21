/** @jsx jsx */
import { FC, Fragment, useState } from 'react';
import { jsx } from '@trousers/core';
import Label from '@precursor/label';
import Select from '@precursor/select';
import Input from '@precursor/input';
import Message from '@precursor/message';
import Heading from '@precursor/heading';
import Stack from '@precursor/stack';
import Toggle from '@precursor/toggle';
import { Theme } from '@precursor/theme';

import { OptionType, ThemeSchema } from './themeSchema';

interface ThemeEditorProps {
    schema: ThemeSchema;
    theme: Theme;
    onChange: (key: string, value: any) => void;
}

const debounce = (func: Function, wait: number) => {
    let timeout: ReturnType<typeof setTimeout> | null;

    return function executedFunction(...args: any[]) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(later, wait);
    };
};

interface ColorPickerProps {
    name: string;
    value: string;
    options: { label: string; value: string }[];
    onChange: (key: string, value: string) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({
    name,
    value,
    options,
    onChange,
}) => {
    const [mode, setMode] = useState('tokens');
    const onChangeHandler = debounce(onChange, 50);

    return (
        <Stack gap="s">
            <Label htmlFor={name}>{name}</Label>
            {mode === 'tokens' ? (
                <Select
                    name={name}
                    defaultValue={value}
                    onChange={e => onChangeHandler(name, e.target.value)}
                >
                    {options.map(({ value, label }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </Select>
            ) : (
                <Input
                    type="color"
                    name={name}
                    defaultValue={value}
                    onChange={e => onChangeHandler(name, e.target.value)}
                />
            )}
            <Toggle
                id={`mode-toggle-${name}`}
                name="mode"
                value={mode === 'manual' ? 'true' : 'false'}
                onChange={e =>
                    setMode(e.target.value === 'true' ? 'tokens' : 'manual')
                }
                label="manual picker"
                size="s"
            />
        </Stack>
    );
};

const renderOption = (
    key: string,
    themeValue: any,
    schema: OptionType,
    onChange: ThemeEditorProps['onChange'],
) => {
    switch (schema.type) {
        case 'text':
            return (
                <Stack gap="xs">
                    <Label htmlFor={key}>{key}</Label>
                    <Input
                        onChange={e => onChange(key, e.target.value)}
                        name={key}
                        defaultValue={themeValue}
                        type="text"
                    />
                </Stack>
            );
        case 'number':
            return (
                <Stack gap="xs">
                    <Label htmlFor={key}>{key}</Label>
                    <Input
                        onChange={e => onChange(key, e.target.value)}
                        name={key}
                        defaultValue={themeValue}
                        type="number"
                    />
                </Stack>
            );
        case 'option':
            const options = schema.options.map(option => ({
                label: option,
                value: option,
            }));
            const valueIndex = schema.options.findIndex(
                val => val === themeValue,
            );

            return (
                <Stack gap="xs">
                    <Label htmlFor={key}>{key}</Label>
                    <Select
                        name={key}
                        defaultValue={
                            (options[valueIndex] &&
                                options[valueIndex].value) ||
                            themeValue
                        }
                        onChange={e => onChange(key, e.target.value)}
                    >
                        {options.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </Select>
                </Stack>
            );
        case 'color':
            const colorOptions = schema.options.map(option => ({
                label: option,
                value: option,
            }));
            const colorValueIndex = schema.options.findIndex(
                val => val === themeValue,
            );

            return (
                <ColorPicker
                    name={key}
                    value={
                        (colorOptions[colorValueIndex] &&
                            colorOptions[colorValueIndex].value) ||
                        themeValue
                    }
                    options={colorOptions}
                    onChange={(name, value) => onChange(name, value)}
                />
            );
        default:
            return null;
    }
};

const renderOptionGroup = (
    key: string,
    property: any,
    schema: any,
    onChange: ThemeEditorProps['onChange'],
) => (
    <Fragment key={key}>
        <Stack gap="s">
            <Heading weight="h3">{key}</Heading>
            {Object.entries(property).map(([nestedKey, nestedValue]) => {
                if (nestedValue.constructor === Object) {
                    return (
                        <Fragment key={nestedKey}>
                            {renderOptionGroup(
                                key + '.' + nestedKey,
                                nestedValue,
                                schema.nested[nestedKey],
                                onChange,
                            )}
                        </Fragment>
                    );
                }

                if (!schema) {
                    return (
                        <Message status="error">
                            Error: schema not found for property: {nestedKey}
                        </Message>
                    );
                }

                return (
                    <Fragment key={nestedKey}>
                        {renderOption(
                            key + '.' + nestedKey,
                            nestedValue,
                            schema,
                            onChange,
                        )}
                    </Fragment>
                );
            })}
        </Stack>
    </Fragment>
);

const ThemeEditor: FC<ThemeEditorProps> = ({ schema, theme, onChange }) => {
    return (
        <Fragment>
            {Object.entries(theme).map(([key, property]) =>
                renderOptionGroup(key, property, schema[key], onChange),
            )}
        </Fragment>
    );
};

export default ThemeEditor;
