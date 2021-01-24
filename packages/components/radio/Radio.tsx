import React, { FC } from 'react';
import { css } from '@trousers/macro';

import Input, { InputProps } from '@precursor/input';
import Label from '@precursor/label';
// import { Theme } from '@precursor/theme';

export interface RadioProps extends Omit<InputProps, 'placeholder'> {
    label: string;
    size?: 's' | 'm' | 'l';
}

const styles = css('ToggleIndicator', {
    '--toggle-size': '24px',
    '--toggle-thumb-size': '10px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: 'var(--toggle-size)',
    height: 'var(--toggle-size)',
    borderRadius: 'calc(var(--toggle-size) / 2)',
    backgroundColor: 'var(--color-neutral-light)',
    padding: 'var(--space-xxs)',
    transition: 'background-color 100ms',
    marginRight: 'var(--spacePreset-inline)',

    '&:after': {
        content: '',
        display: 'block',
        width: 'var(--toggle-thumb-size)',
        height: 'var(--toggle-thumb-size)',
        backgroundColor: '#fff',
        borderRadius: '50%',
        opacity: 0,
    },

    'input[type="radio"]:focus + &': {
        boxShadow: '0 0 0 var(--border-size-1) var(--border-color-focus)',
    },

    'input[type="radio"]:checked + &': {
        backgroundColor: 'var(--color-primary-light)',
        '&:after': {
            opacity: 1,
        },
    },
})
    .modifier('large', {
        '--toggle-size': '34px',
        '--toggle-thumb-size': '14px',
    })
    .modifier('small', {
        '--toggle-size': '20px',
        '--toggle-thumb-size': '8px',
    })
    .modifier('disabled', {
        opacity: '0.6',
        cursor: 'not-allowed',
    });

const Radio: FC<RadioProps> = ({ size = 'm', ...props }) => (
    <Label htmlFor={props.id}>
        <Input
            css={css({
                clip: 'rect(0px, 0px, 0px, 0px)',
                height: '1px',
                width: '1px',
                whiteSpace: 'nowrap',
                position: 'absolute',
                borderWidth: '0px',
                borderStyle: 'initial',
                borderColor: 'initial',
                borderImage: 'initial',
                margin: '-1px',
                padding: '0px',
                overflow: 'hidden',
            })}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            type="radio"
            value={props.value}
            checked={props.checked}
        />
        <div
            aria-hidden="true"
            css={styles}
            $large={size === 'l'}
            $small={size === 's'}
            $disabled={props.disabled}
        />
        <span css={css({ userSelect: 'none' })}>{props.label}</span>
    </Label>
);

export default Radio;
