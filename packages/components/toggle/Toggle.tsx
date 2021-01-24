import React, { FC } from 'react';
import { css } from '@trousers/macro';

import Input, { InputProps } from '@precursor/input';
import Label from '@precursor/label';
// import { Theme } from '@precursor/theme';

export interface ToggleProps extends Omit<InputProps, 'placeholder'> {
    label?: string;
    size?: 's' | 'm' | 'l';
}

const toggleStyles = css('ToggleIndicator', {
    display: 'inline-block',
    cursor: 'pointer',
    width: 'var(--toggle-size)',
    borderRadius: 'calc(var(--toggle-size) / 2)',
    backgroundColor: '${({ color }) => color.neutral.light}',
    padding: '${({ space }) => space.xxs}',
    transition: 'background-color 100ms',
    marginRight: '${({ spacePreset }) => spacePreset.inline}',
    '&:after': {
        content: '',
        display: 'block',
        width: 'var(--toggle-thumb-size)',
        height: 'var(--toggle-thumb-size)',
        backgroundColor: '#fff',
        borderRadius: '50%',
        transition: 'transform 100ms',
        transform: 'translateX(0)',
    },
    'input[type="checkbox"]:focus + &': {
        boxShadow:
            '0 0 0 ${({ border }) => border.size[1]} ${({ border }) => border.color.focus}',
    },
    'input[type="checkbox"]:checked + &': {
        backgroundColor: '${({ color }) => color.primary.light}',

        '&:after': {
            transform:
                'translateX(calc(var(--toggle-size)-var(--toggle-thumb-size)-${({ space }) => space.xxs} * 2))',
        },
    },
})
    .modifier('large', {
        '--toggle-size': '70px',
        '--toggle-thumb-size': '26px',
    })
    .modifier('small', {
        '--toggle-size': '30px',
        '--toggle-thumb-size': '12px',
    })
    .modifier('disabled', {
        opacity: 0.6,
        cursor: 'not-allowed',
    })
    .theme({
        toggleSize: '44px',
        toggleThumbSize: '16px',
    });

const Toggle: FC<ToggleProps> = ({ size = 'm', ...props }) => (
    <div
        css={css({
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
            userSelect: 'none',
        })}
    >
        <Label htmlFor={props.id}>
            <Input
                css={css({
                    clip: 'rect(0px, 0px, 0px, 0px)',
                    height: '1px',
                    width: '1px',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    borderWidth: 0,
                    borderStyle: 'initial',
                    borderColor: 'initial',
                    borderImage: 'initial',
                    margin: '-1px',
                    padding: 0,
                    overflow: 'hidden',
                })}
                disabled={props.disabled}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                type="checkbox"
                value={props.value}
                checked={props.checked}
            />
            <div
                aria-hidden="true"
                css={toggleStyles}
                $large={size === 'l'}
                $small={size === 's'}
                $disabled={props.disabled}
            />
            <span css={css({ userSelect: 'none' })}>{props.label}</span>
        </Label>
    </div>
);

export default Toggle;
