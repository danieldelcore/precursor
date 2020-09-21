import React, { FC, ChangeEventHandler } from 'react';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';
import { InputTypes } from '@precursor/types';

export interface InputProps {
    className?: string;
    disabled?: boolean;
    id?: string;
    name: string;
    placeholder?: string;
    type?: InputTypes;
    defaultValue?: string;
    value?: string;
    checked?: boolean;
    state?: 'success' | 'error' | 'warning';
    size?: 's' | 'm' | 'l';
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const styles = ({ size, state, disabled }: InputProps) => collector<Theme>(
    'Input',
).element`
    --input-height: 44px;
    --input-border-color: #E2E8F0;
    height: var(--input-height);
    padding: 0 10px;
    background-color: ${({ color }) => color.background.base};
    border-radius: ${({ radius }) => radius.m};
    border-color: var(--input-border-color);
    border-style: solid;
    border-width: 2px;
    box-shadow: none;
    appearance: none;
    width: 100%;
    margin: 0;
    font-family: ${({ font }) => font.base};
    color: ${({ color }) => color.typography.base};

    &::placeholder {
        color: ${({ color }) => color.typography.placeholder};
    }

    &:focus {
        box-shadow: var(--input-border-color) 0px 0px 2px 1px;
        outline: 0;
    }
`.modifier('success', state === 'success')`
    --input-border-color: #31C48D;
`.modifier('warning', state === 'warning')`
    --input-border-color: #FDBA8C;
`.modifier('error', state === 'error')`
    --input-border-color: #F98080;
`.modifier('disabled', disabled)`
    cursor: not-allowed;
    background-color: ${({ color }: Theme) => color.background.light};
`.modifier('small', size === 's')`
    --input-height: 36px;
`.modifier('large', size === 'l')`
    --input-height: 52px;
`;

const Input: FC<InputProps> = ({ type = 'text', ...props }) => {
    const classNames = useStyles(styles(props));

    return (
        <input
            className={`${classNames} ${props.className || ''}`}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            type={type}
            value={props.value || props.defaultValue}
            checked={props.checked}
        />
    );
};

export default Input;
