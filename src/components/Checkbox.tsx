import React, { FC } from 'react';
import { styleCollector, useStyles } from 'trousers';

import { Input, InputProps, Label } from './';

export interface Props extends InputProps {
    label: string;
}

const styles = styleCollector('Checkbox').element`
    height: auto;
    width: auto;
    appearance: checkbox;
    display: inline;
`;

const Checkbox: FC<Props> = props => {
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
                type="checkbox"
                value={props.value}
                checked={props.checked}
            />
            <span>{props.label}</span>
        </Label>
    );
};

export default Checkbox;
