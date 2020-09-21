/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@trousers/core';
import styleCollector from '@trousers/collector';

import Input, { InputProps } from '@precursor/input';
import Label from '@precursor/label';
import { Theme } from '@precursor/theme';

export interface ToggleProps extends Omit<InputProps, 'placeholder'> {
    label?: string;
    size?: 's' | 'm' | 'l';
}

const toggleStyles = (
    size: ToggleProps['size'],
    disabled: ToggleProps['disabled'],
) =>
    styleCollector<Theme>('ToggleIndicator').element`
    --toggle-size: 44px;
    --toggle-thumb-size: 16px;

    display: inline-block;
    cursor: pointer;
    width: var(--toggle-size);
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
        transition: transform 100ms;
        transform: translateX(0);
    }

    input[type="checkbox"]:focus + & {
        box-shadow: 0 0 0 ${({ border }) => border.size[1]} ${({ border }) =>
        border.color.focus};
    }

    input[type='checkbox']:checked + & {
        background-color: ${({ color }) => color.primary.light};

        &:after {
            transform: translateX(
                calc(var(--toggle-size) - var(--toggle-thumb-size) - ${({
                    space,
                }) => space.xxs} * 2)
            );
        }
    }
`.modifier('large', size === 'l')`
    --toggle-size: 70px;
    --toggle-thumb-size: 26px;
`.modifier('small', size === 's')`
    --toggle-size: 30px;
    --toggle-thumb-size: 12px;
`.modifier('disabled', disabled)`
    opacity: 0.6;
    cursor: not-allowed;
`;

const Toggle: FC<ToggleProps> = ({ size = 'm', ...props }) => (
    <div
        css={css`
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            user-select: none;
        `}
    >
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
                type="checkbox"
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
    </div>
);

export default Toggle;
