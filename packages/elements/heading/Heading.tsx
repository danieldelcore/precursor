/** @jsx jsx */
import React, { FC, ReactNode, Fragment } from 'react';
import { useStyles, css, jsx } from '@trousers/core';
import collector from '@trousers/collector';

import copyToClipboard from '@precursor/copy-to-clipboard';
import { Theme } from '@precursor/theme';

export interface HeadingProps {
    children: ReactNode;
    id?: string;
    weight?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const styles = collector<Theme>('heading').element`
    font-family: ${({ font }) => font.headings};
    font-weight: ${({ fontWeight }) => fontWeight[2]};
    color: ${({ color }) => color.headings};
    margin-top: 0;

    &:hover > a {
        opacity: 1;
    }
`;

const Heading: FC<HeadingProps> = ({ children, weight = 'h2', id }) => {
    const className = useStyles(styles);

    function onClick() {
        if (window && id) {
            copyToClipboard(window.location.href);
        }
    }

    return React.createElement(
        weight!,
        {
            className,
            id,
            onClick,
        },
        <Fragment>
            {children}
            {id && (
                <a
                    css={css<Theme>`
                        text-decoration: none;
                        padding: 0 0.5rem;
                        color: ${({ color }) => color.link};
                        opacity: 0;
                        border-radius: ${({ radius }) => radius[1]};
                        border: ${({ border }) =>
                            `${border.size[0]} solid transparent`};

                        :focus,
                        :hover {
                            opacity: 1;
                            outline: none;
                            border: ${({ border }) =>
                                `${border.size[0]} solid ${border.color.focus}`};
                        }
                    `}
                    href={`#${id}`}
                    onClick={onClick}
                    aria-label="anchor"
                >
                    #
                </a>
            )}
        </Fragment>,
    );
};

export default Heading;
