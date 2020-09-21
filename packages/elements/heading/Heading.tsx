/** @jsx jsx */
import React, { FC, ReactNode, Fragment } from 'react';
import { useStyles, css, jsx } from '@trousers/core';
import collector from '@trousers/collector';

import copyToClipboard from '@precursor/copy-to-clipboard';
import { Theme } from '@precursor/theme';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
    children: ReactNode;
    id?: string;
    as?: Headings;
    weight?: Headings;
}

const styles = (weight: HeadingProps['weight']) => collector<Theme>('heading')
    .element`
    font-family: ${({ font }) => font.heading};
    font-weight: ${({ fontWeight }) => fontWeight.heading};
    font-size: ${({ fontSize }) => fontSize.h1};
    line-height: ${({ lineHeight }) => lineHeight.h1};
    color: ${({ color }) => color.typography.heading};
    margin: 0;

    &:hover > a {
        opacity: 1;
    }
`.modifier('h2', weight === 'h2')`
    font-size: ${({ fontSize }) => fontSize.h2};
    line-height: ${({ lineHeight }) => lineHeight.h2};
`.modifier('h3', weight === 'h3')`
    font-size: ${({ fontSize }: Theme) => fontSize.h3};
    line-height: ${({ lineHeight }: Theme) => lineHeight.h3};
`.modifier('h4', weight === 'h4')`
    font-size: ${({ fontSize }: Theme) => fontSize.h4};
    line-height: ${({ lineHeight }: Theme) => lineHeight.h4};
`.modifier('h5', weight === 'h5')`
    font-size: ${({ fontSize }: Theme) => fontSize.h5};
    line-height: ${({ lineHeight }: Theme) => lineHeight.h5};
`.modifier('h6', weight === 'h6')`
    font-size: ${({ fontSize }: Theme) => fontSize.h6};
    line-height: ${({ lineHeight }: Theme) => lineHeight.h6};
`;

const Heading: FC<HeadingProps> = ({
    children,
    weight = 'h2',
    as: asElement,
    id,
}) => {
    const className = useStyles(styles(weight));

    function onClick() {
        if (window && id) {
            copyToClipboard(window.location.href);
        }
    }

    return React.createElement(
        asElement || weight,
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
                        border-radius: ${({ radius }) => radius.m};
                        border: ${({ border }) =>
                            `${border.size[0]} solid transparent`};

                        :focus {
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
