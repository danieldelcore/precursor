import React, { FC, ChangeEventHandler } from 'react';
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';

export interface TextAreaProps {
    className?: string;
    disabled?: boolean;
    id: string;
    name: string;
    placeholder?: string;
    type?: string;
    value: string;
    defaultValue?: string;
    appearance?: 'success' | 'error' | 'warning';
    size?: 's' | 'm' | 'l';
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

// TODO: https://v5.fannypack.style/form/input/ great focus styles here
const styles = css('TextArea', {
    '--textarea-height': '90px',
    '--textarea-border-color': '#E2E8F0',
    height: 'var(--textarea-height)',
    padding: '10px',
    backgroundColor: 'var(--color-background-base)',
    borderRadius: 'var(--radius-m)',
    borderColor: 'var(--textarea-border-color)',
    borderStyle: 'solid',
    borderWidth: '2px',
    boxShadow: 'none',
    appearance: 'none',
    width: '100%',
    maxWidth: '100%',
    minHeight: 'var(--textarea-height)',
    margin: 0,
    fontFamily: 'var(--font-base)',
    color: 'var(--color-typography-base)',

    '&::placeholder': {
        color: 'var(--color-typography-placeholder)',
    },

    '&:focus': {
        boxShadow: 'var(--textarea-border-color) 0px 0px 2px 1px',
        outline: 0,
    },
})
    .modifier('success', {
        '--textarea-border-color': '#31C48D',
    })
    .modifier('warning', { '--textarea-border-color': '#FDBA8C' })
    .modifier('error', { '--textarea-border-color': '#F98080' })
    .modifier('disabled', {
        cursor: 'not-allowed',
        backgroundColor: 'var(--color-background-light)',
    })
    .modifier('small', {
        '--textarea-height': '60px',
    })
    .modifier('large', {
        '--textarea-height': '120px',
    });

const TextArea: FC<TextAreaProps> = props => (
    <textarea
        css={styles}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value || props.defaultValue}
        $success={props.appearance === 'success'}
        $warning={props.appearance === 'warning'}
        $error={props.appearance === 'error'}
        $disabled={props.disabled}
        $small={props.size === 's'}
        $large={props.size === 'l'}
    />
);

export default TextArea;
