import React, { FC, ChangeEvent } from 'react';
import { trousers, useTrousers } from 'trousers';

import { Theme } from '../theme';

export interface Props {
    className?: string;
    disabled?: boolean;
    id: string;
    name: string;
    placeholder?: string;
    type?: string;
    value: string;
    onChange?(event: ChangeEvent): void;
}

const styles = trousers<{}, {}, Theme>('TextArea').element`
    padding: 6px 10px;
    border: 1px solid ${({ colors }) => colors.backgroundAlt};
    background-color: ${({ colors }) => colors.backgroundAlt};
    border-radius: ${({ radii }) => radii[0]};
    box-shadow: none;
    appearance: none;
    min-height: 165px;
    padding-top: 6px;
    padding-bottom: 6px;
    width: 100%;
    margin-bottom: ${({ space }) => space[1]}em;

    &:focus {
        border: 1px solid #33C3F0;
        outline: 0;
    }
`;

const TextArea: FC<Props> = props => {
    const classNames = useTrousers(styles, props);

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
