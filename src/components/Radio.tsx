/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@trousers/core';

import { Input, InputProps, Label } from './';

export interface RadioProps extends InputProps {
    label: string;
}

const Radio: FC<RadioProps> = props => {
    return (
        <Label htmlFor={props.id}>
            <Input
                css={css`
                    height: auto;
                    width: auto;
                    appearance: radio;
                    display: inline;
                    cursor: pointer;
                `}
                disabled={props.disabled}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                placeholder={props.placeholder}
                type="radio"
                value={props.value}
                checked={props.checked}
            />
            <span>{props.label}</span>
        </Label>
    );
};

export default Radio;
