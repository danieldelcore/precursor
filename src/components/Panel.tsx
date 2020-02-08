import React, { FC, ReactNode } from 'react';
import { useStyles, styleCollector } from 'trousers';

import { Theme } from '../';

export interface Props {
    children: ReactNode;
}

const styles = styleCollector<Props, {}, Theme>('Panel').element`
    border-radius: ${({ radii }) => radii[1]};
    border: 1px solid ${({ colors }) => colors.backgroundAlt};
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: ${({ shadows }) => shadows.small};

    & > *:first-child {
        margin-top: 0px;
    }

    & > *:last-child {
        margin-bottom: 0px;
    }
`;

const Panel: FC<Props> = props => {
    const classNames = useStyles(styles, props);

    return <div className={classNames}>{props.children}</div>;
};

export default Panel;
