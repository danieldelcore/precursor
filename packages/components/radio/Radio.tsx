/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@trousers/core';
import styleCollector from '@trousers/collector';

import Input, { InputProps } from '@precursor/input';
import Label from '@precursor/label';
import { Theme } from '@precursor/theme';

export interface RadioProps extends Omit<InputProps, 'placeholder'> {
    label: string;
    size?: 's' | 'm' | 'l';
}

const toggleStyles = (
    size: RadioProps['size'],
    disabled: RadioProps['disabled'],
) =>
    styleCollector<Theme>('ToggleIndicator').element`
    --toggle-size: 24px;
    --toggle-thumb-size: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border-radius: calc(var(--toggle-size) / 2);
    background-color: ${({ color }) => color.neutral.light};
    padding: ${({ space }) => space.xxs};
    transition: background-color 100ms;
    margin-right: ${({ spacePreset }) => spacePreset.inline};

    &:after {
        content: '';
        display: block;
        width: var(--toggle-thumb-size);
        height: var(--toggle-thumb-size);
        background-color: #fff;
        border-radius: 50%;
        opacity: 0;
    }

    input[type="radio"]:focus + & {
        box-shadow: 0 0 0 ${({ border }) => border.size[1]} ${({ border }) =>
        border.color.focus};
    }

    input[type='radio']:checked + & {
        background-color: ${({ color }) => color.primary.light};

        &:after {
          opacity: 1;
        }
    }
`.modifier('large', size === 'l')`
    --toggle-size: 34px;
    --toggle-thumb-size: 14px;
`.modifier('small', size === 's')`
    --toggle-size: 20px;
    --toggle-thumb-size: 8px;
`.modifier('disabled', disabled)`
    opacity: 0.6;
    cursor: not-allowed;
`;

const Radio: FC<RadioProps> = ({ size = 'm', ...props }) => (
    <Label htmlFor={props.id}>
        <Input
            css={css<Theme>`
                clip: rect(0px, 0px, 0px, 0px);
                height: 1px;
                width: 1px;
                white-space: nowrap;
                position: absolute;
                border-width: 0px;
                border-style: initial;
                border-color: initial;
                border-image: initial;
                margin: -1px;
                padding: 0px;
                overflow: hidden;
            `}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            type="radio"
            value={props.value}
            checked={props.checked}
        />
        <div aria-hidden="true" css={toggleStyles(size, props.disabled)} />
        <span
            css={css`
                user-select: none;
            `}
        >
            {props.label}
        </span>
    </Label>
);

export default Radio;
