import React, { FC, ReactNode } from 'react';
import { styleCollector, useStyles } from 'trousers';

export interface Props {
    children: ReactNode;
}

const styles = styleCollector('ButtonGroup').element`
        display: inline-block;

        button {
            margin-right: 1em;
        }

        button:last-child {
            margin-right: 0;
        }
    `;

const ButtonGroup: FC<Props> = props => {
    const classNames = useStyles(styles);

    return <div className={classNames}>{props.children}</div>;
};

export default ButtonGroup;
