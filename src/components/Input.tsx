import React, { FC, ChangeEvent } from 'react';
import { trousers, useTrousers } from 'trousers';

import { Theme } from '../theme';
import { InputTypes } from '../types';

export interface Props {
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

const styles = trousers<{}, {}, Theme>('Input').element`
    height: 38px;
    padding: 6px 10px;
    background-color: ${({ colors }) => colors.backgroundAlt};
    border-radius: ${({ radii }) => radii[0]};
    border: 1px solid ${({ colors }) => colors.backgroundAlt};
    box-shadow: none;
    appearance: none;
    width: 100%;
    margin-bottom: ${({ space }) => space[1]}em;

    &:focus {
        border: 1px solid #33C3F0;
        outline: 0;
    }
`;

const Input: FC<Props> = props => {
    const classNames = useTrousers(styles, props);

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
