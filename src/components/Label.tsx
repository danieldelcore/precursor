import React, { FC, ReactNode } from 'react';
import { styleCollector, useStyles } from 'trousers';

export interface Props {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
}

const styles = styleCollector('Label').element`
    display: block;
    margin-bottom: .5rem;
    font-weight: 600;
    width: 100%;
`;

const Label: FC<Props> = props => {
    const classNames = useStyles(styles, props);

    return (
        <label className={classNames} htmlFor={props.htmlFor}>
            {props.children}
        </label>
    );
};

export default Label;
