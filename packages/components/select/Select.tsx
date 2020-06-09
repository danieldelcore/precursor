import React, { ChangeEvent, ReactNode, FC } from 'react';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';

export interface SelectProps {
    children: ReactNode | string;
    className?: string;
    disabled?: boolean;
    id: string;
    name?: string;
    onChange?(event: ChangeEvent): void;
    value?: string;
}

const styles = (props: SelectProps) => collector<Theme>('Select').element`
    height: 38px;
    padding: 6px 10px;
    border: 1px solid ${({ colors }) => colors.backgroundAlt};
    background-color: ${({ colors }) => colors.backgroundAlt};
    border-radius: ${({ radii }) => radii[0]};
    box-shadow: none;
    appearance: none;
    width: 100%;
    margin-bottom: ${({ space }) => space[1]}em;

    &:focus {
        border: 1px solid #33C3F0;
        outline: 0;
    }
`.modifier(props.disabled)`
    cursor: not-allowed;
`;

const Select: FC<SelectProps> = props => {
    const classNames = useStyles(styles(props));

    return (
        <select
            className={classNames}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            disabled={props.disabled}
        >
            {props.children}
        </select>
    );
};

export default Select;
