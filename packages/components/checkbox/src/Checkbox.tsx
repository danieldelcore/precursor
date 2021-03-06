import React, { FC } from 'react';
// @ts-ignoreE
import { css } from '@trousers/macro';

import Label from '@precursor/label';
import Input, { InputProps } from '@precursor/input';
// import { Theme } from '@precursor/theme';

export interface CheckboxProps extends InputProps {
    label: string;
}

const styles = css('Checkbox', {
    height: 'auto',
    width: 'auto',
    appearance: 'checkbox',
    display: 'inline',
    cursor: 'pointer',
    marginRight: 'var(--spacePreset-inline)',
});

const Checkbox: FC<CheckboxProps> = props => {
    return (
        <Label htmlFor={props.id}>
            <Input
                // @ts-ignore
                css={styles}
                disabled={props.disabled}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                placeholder={props.placeholder}
                type="checkbox"
                value={props.value}
                checked={props.checked}
            />
            <span>{props.label}</span>
        </Label>
    );
};

export default Checkbox;
