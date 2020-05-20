import React, { FC, ChangeEventHandler } from 'react';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@geometric/theme';

export interface TextAreaProps {
    className?: string;
    disabled?: boolean;
    id: string;
    name: string;
    placeholder?: string;
    type?: string;
    value: string;
    onChange?: ChangeEventHandler;
}

const styles = (props: TextAreaProps) => collector<Theme>('TextArea').element`
    appearance: none;
    background-color: ${({ colors }) => colors.backgroundAlt};
    border-radius: ${({ radii }) => radii[0]};
    border: 1px solid ${({ colors }) => colors.backgroundAlt};
    box-shadow: none;
    margin-bottom: ${({ space }) => space[1]}em;
    max-width: 100%;
    min-height: 165px;
    padding-bottom: 6px;
    padding-top: 6px;
    padding: 6px 10px;
    width: 100%;

    &:focus {
        border: 1px solid #33C3F0;
        outline: 0;
    }
`.modifier(props.disabled)`
    cursor: not-allowed;
`;

const TextArea: FC<TextAreaProps> = props => {
    const classNames = useStyles(styles(props));

    return (
        <textarea
            className={classNames}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
        />
    );
};

export default TextArea;
