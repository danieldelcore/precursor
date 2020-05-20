/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';

import Label from '@geometric/label';
import Input, { InputProps } from '@geometric/input';

export interface CheckboxProps extends InputProps {
    label: string;
}

const styles = collector('Checkbox').element`
    height: auto;
    width: auto;
    appearance: checkbox;
    display: inline;
    cursor: pointer;
`;

const Checkbox: FC<CheckboxProps> = props => {
    return (
        <Label htmlFor={props.id}>
            <Input
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
