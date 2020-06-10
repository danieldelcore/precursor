import React, { FC, ReactNode, useState } from 'react';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import copyToClipboard from '@precursor/copy-to-clipboard';
import { Theme } from '@precursor/theme';

export interface HeadingProps {
    children: ReactNode;
    id?: string;
    weight?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const styles = () => collector<Theme>('heading').element`
    font-family: ${({ fonts }) => fonts.headings};
    font-weight: ${({ fontWeight }) => fontWeight[2]};
    color: ${({ colors }) => colors.headings};
    margin-top: 0;
`;

const linkStyles = (isHovered: boolean) => collector('Link').element`
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
`.modifier(isHovered)`
    :after {
        display: inline-block;
    }
`;

const Heading: FC<HeadingProps> = props => {
    const [isHovered, setIsHovered] = useState(false);
    const classNames = useStyles(styles());
    const linkClassNames = useStyles(linkStyles(isHovered));

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
