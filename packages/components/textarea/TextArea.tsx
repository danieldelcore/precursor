import React, { FC, ChangeEventHandler } from 'react';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';

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
    background-color: ${({ color }) => color.background};
    border-radius: ${({ radius }) => radius[0]};
    border: ${({ border }) => `${border.size[0]} solid ${border.color.base}`};
    box-shadow: none;
    margin-bottom: ${({ space }) => space[1]}em;
    max-width: 100%;
    min-height: 100px;
    padding-bottom: 6px;
    padding-top: 6px;
    padding: 6px 10px;
    width: 100%;
    font-family: ${({ font }) => font.base};

    &:focus {
        border: border: ${({ border }) =>
            `${border.size[0]} solid ${border.color.focus}`};
        outline: 0;
    }
`.modifier(props.disabled)`
    cursor: not-allowed;
    background-color: ${({ color }) => color.backgroundAlt};
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
