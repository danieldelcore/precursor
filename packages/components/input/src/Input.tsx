import React, { FC, ChangeEventHandler } from 'react';
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';
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
    appearance?: 'success' | 'error' | 'warning';
    size?: 's' | 'm' | 'l';
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const styles = css('Input', {
    '--input-height': '44px',
    '--input-border-color': '#E2E8F0',
    height: 'var(--input-height)',
    padding: '0 10px',
    backgroundColor: 'var(--color-background-base)',
    borderRadius: 'var(--radius-m)',
    borderColor: 'var(--input-border-color)',
    borderStyle: 'solid',
    borderWidth: '2px',
    boxShadow: 'none',
    appearance: 'none',
    width: '100%',
    margin: '0',
    fontFamily: 'var(--font-base)',
    color: 'var(--color-typography-base)',

    '&::placeholder': {
        color: 'var(--color-typography-placeholder)',
    },
    '&:focus': {
        boxShadow: 'var(--input-border-color) 0px 0px 2px 1px',
        outline: 0,
    },
})
    .modifier('success', { '--input-border-color': '#31C48D' })
    .modifier('warning', { '--input-border-color': '#FDBA8C' })
    .modifier('error', { '--input-border-color': '#F98080' })
    .modifier('disabled', {
        cursor: 'not-allowed',
        backgroundColor: 'var(--color-background-light)',
    })
    .modifier('small', { '--input-height': '36px' })
    .modifier('large', { '--input-height': '52px' });

const Input: FC<InputProps> = ({ type = 'text', ...props }) => (
    <input
        css={styles}
        className={props.className}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={type}
        value={props.value || props.defaultValue}
        checked={props.checked}
        $success={props.appearance === 'success'}
        $warning={props.appearance === 'warning'}
        $error={props.appearance === 'error'}
        $disabled={props.disabled}
        $large={props.size === 'l'}
        $small={props.size === 's'}
    />
);

export default Input;
