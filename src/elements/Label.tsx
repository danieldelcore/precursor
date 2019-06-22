import React, { FC, ReactNode } from 'react';
import { trousers, useTrousers } from 'trousers';

export interface Props {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
}

const styles = trousers('Label').element`
    display: block;
    margin-bottom: .5rem;
    font-weight: 600;
    width: 100%;
`;

const Label: FC<Props> = props => {
    const classNames = useTrousers(styles, props);

    return (
        <label className={classNames} htmlFor={props.htmlFor}>
            {props.children}
        </label>
    );
};

export default Label;
