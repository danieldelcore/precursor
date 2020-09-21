/** @jsx jsx */
import { FC, ChangeEventHandler } from 'react';
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';

export interface TextAreaProps {
    className?: string;
    disabled?: boolean;
    id: string;
    name: string;
    placeholder?: string;
    type?: string;
    value: string;
    defaultValue?: string;
    state?: 'success' | 'error' | 'warning';
    size?: 's' | 'm' | 'l';
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

// TODO: https://v5.fannypack.style/form/input/ great focus styles here

const styles = ({ size, state, disabled }: TextAreaProps) => collector<Theme>(
    'TextArea',
).element`
    --textarea-height: 90px;
    --textarea-border-color: #E2E8F0;
    height: var(--textarea-height);
    padding: 10px;
    background-color: ${({ color }) => color.background.base};
    border-radius: ${({ radius }) => radius.m};
    border-color: var(--textarea-border-color);
    border-style: solid;
    border-width: 2px;
    box-shadow: none;
    appearance: none;
    width: 100%;
    max-width: 100%;
    min-height: var(--textarea-height);
    margin: 0;
    font-family: ${({ font }) => font.base};
    color: ${({ color }) => color.typography.base};

    &::placeholder {
        color: ${({ color }) => color.typography.placeholder};
    }

    &:focus {
        box-shadow: var(--textarea-border-color) 0px 0px 2px 1px;
        outline: 0;
    }
`.modifier('success', state === 'success')`
    --textarea-border-color: #31C48D;
`.modifier('warning', state === 'warning')`
    --textarea-border-color: #FDBA8C;
`.modifier('error', state === 'error')`
    --textarea-border-color: #F98080;
`.modifier('disabled', disabled)`
    cursor: not-allowed;
    background-color: ${({ color }: Theme) => color.background.light};
`.modifier('small', size === 's')`
    --textarea-height: 60px;
`.modifier('large', size === 'l')`
    --textarea-height: 120px;
`;

const TextArea: FC<TextAreaProps> = props => (
    <textarea
        css={styles(props)}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value || props.defaultValue}
    />
);

export default TextArea;
