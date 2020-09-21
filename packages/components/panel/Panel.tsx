import React, { FC, ReactNode } from 'react';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';

export interface PanelProps {
    children: ReactNode;
}

const styles = collector<Theme>('Panel').element`
    border-radius: ${({ radius }) => radius.m};
    border: ${({ border }) => `${border.size[0]} solid ${border.color.base}`};
    padding: ${({ space }) => space.m};
`;

const Panel: FC<PanelProps> = props => {
    const classNames = useStyles(styles);

    return <div className={classNames}>{props.children}</div>;
};

export default Panel;
