import React, { FC, ReactNode } from 'react';
import { trousers, useTrousers } from 'trousers';

import { Theme } from '../';

export interface Props {
    children: ReactNode;
}

const styles = trousers<Props, {}, Theme>('Panel').element`
    border-radius: ${({ radii }) => radii[1]};
    border: 1px solid #313131;
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: ${({ shadows }) => shadows.small}
`;

const Panel: FC<Props> = props => {
    const classNames = useTrousers(styles, props);

    return <div className={classNames}>{props.children}</div>;
};

export default Panel;
