import React, { FC, ReactNode } from 'react';
import { styleCollector, useStyles } from 'trousers';

import { Theme } from '../theme';

export interface Props {
    children: ReactNode;
    id?: string;
    weight: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const styles = styleCollector<Props, {}, Theme>('Heading').element`
    font-family: ${({ fonts }) => fonts.headings};
    font-weight: ${({ fontWeight }) => fontWeight[2]};
    color: ${({ colors }) => colors.headings};
`.modifier(props => props!.weight === 'h1')`
    font-size: ${({ fontSizes }) => fontSizes[6]}px;
`.modifier(props => props!.weight === 'h2')`
    font-size: ${({ fontSizes }) => fontSizes[4]}px;
    font-weight: ${({ fontWeight }) => fontWeight[1]};
`;

const Heading: FC<Props> = props => {
    const classNames = useStyles(styles, props);

    return React.createElement(
        props.weight,
        {
            className: classNames,
        },
        props.children,
    );
};

export default Heading;
