import React, { FC } from 'react';
import { useStyles, styleCollector } from 'trousers';

import { Input, InputProps, Label } from './';

export interface Props extends InputProps {
    label: string;
}

const styles = styleCollector('Radio').element`
    height: auto;
    width: auto;
    appearance: radio;
    display: inline;
`;

const Radio: FC<Props> = props => {
    const classNames = useStyles(styles, props);

    return (
        <Label htmlFor={props.id}>
            <Input
                className={classNames}
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
