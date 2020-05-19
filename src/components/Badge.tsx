/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@trousers/core';
import collector from '@trousers/collector';

export interface Props {
    children: string;
}

const Badge: FC<Props> = ({ children }) => (
    <span
        css={collector('Badge').element`
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
    `}
    >
        {children}
    </span>
);

export default Badge;
