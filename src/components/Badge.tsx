import React, { FC } from 'react';
import { styleCollector, useStyles } from 'trousers';

export interface Props {
    children: string;
}

const styles = styleCollector('Badge').element`
    display: 'inline-block';
    boxSizing: 'border-box';
    minWidth: '30px';
    background: 'white';
    borderRadius: '15px';
    padding: '2px 6px';
    textAlign: 'center';
    fontSize: '12px';
    color: '#bf2600';
    backgroundColor: '#ffebe6';
`;

const Badge: FC<Props> = ({ children }) => {
    const classNames = useStyles(styles);

    return <span className={classNames}>{children}</span>;
};

export default Badge;
