import React, { FC, ReactNode, useState } from 'react';
import { styleCollector, useStyles } from 'trousers';

import { copyToClipboard } from '../common';
import { Theme } from '../theme';

export interface Props {
    children: ReactNode;
    id?: string;
    weight?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const styles = styleCollector<Props, {}, Theme>('heading').element`
    font-family: ${({ fonts }) => fonts.headings};
    font-weight: ${({ fontWeight }) => fontWeight[2]};
    color: ${({ colors }) => colors.headings};
`.modifier('primary', props => props!.weight === 'h1')`
    font-size: ${({ fontSizes }) => fontSizes[6]}px;
`.modifier('secondary', props => props!.weight === 'h2')`
    font-size: ${({ fontSizes }) => fontSizes[4]}px;
    font-weight: ${({ fontWeight }) => fontWeight[1]};`;

const linkStyles = styleCollector<{}, { isHovered: boolean }>('Link').element`
    display: block;
    text-decoration: none;

    h1, h2, h3, h4, h5, h6 {
        display: inline-block;
    }

    :after {
        content: '🔗';
        display: none;
        padding-left: 1rem;
    }

    :focus,
    :hover {
        &:after {
            display: inline-block;
        }
    }
`.modifier((_, state) => state!.isHovered)`
    :after {
        display: inline-block;
    }
`;

const Heading: FC<Props> = props => {
    const [isHovered, setIsHovered] = useState(false);
    const classNames = useStyles(styles, props);
    const linkClassNames = useStyles(linkStyles, {}, { isHovered });

    function onClick() {
        if (window && props.id) {
            copyToClipboard(window.location.href);
        }
    }

    const Heading = React.createElement(
        props.weight!,
        {
            className: classNames,
            id: props.id,
            onClick: () => onClick(),
            onMouseOver: () => setIsHovered(true),
            onMouseOut: () => setIsHovered(false),
        },
        props.children,
    );

    return props.id ? (
        <a className={linkClassNames} href={`#${props.id}`} onClick={onClick}>
            {Heading}
        </a>
    ) : (
        Heading
    );
};

Heading.defaultProps = {
    weight: 'h2',
};

export default Heading;
