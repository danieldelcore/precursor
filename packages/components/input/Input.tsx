import React, { FC, ChangeEvent } from 'react';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';
import { InputTypes } from '@precursor/types';

export interface InputProps {
    className?: string;
    disabled?: boolean;
    id: string;
    name: string;
    placeholder?: string;
    type?: InputTypes;
    value: string;
    checked?: boolean;
    onChange?(event: ChangeEvent): void;
}

const styles = (props: InputProps) => collector<Theme>('Input').element`
    height: 38px;
    padding: 0 10px;
    background-color: ${({ color }) => color.background};
    border-radius: ${({ radius }) => radius[0]};
    border: ${({ border }) => `${border.size[0]} solid ${border.color.base}`};
    box-shadow: none;
    appearance: none;
    width: 100%;
    margin-bottom: ${({ space }) => space[1]}em;
    font-family: ${({ font }) => font.base};

    &:focus {
        border: ${({ border }) =>
            `${border.size[0]} solid ${border.color.focus}`};
        outline: 0;
    }
`.modifier(!!props!.disabled)`
    cursor: not-allowed;
    background-color: ${({ color }) => color.backgroundAlt};
`;

const Input: FC<InputProps> = props => {
    const classNames = useStyles(styles(props));

    return (
        <input
            className={`${classNames} ${props.className}`}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            checked={props.checked}
        />
    );
};

Input.defaultProps = {
    type: 'text',
};

export default Input;
