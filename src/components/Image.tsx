/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@trousers/core';

export interface ImageProps {
    src: string;
    alt?: string;
}

const Image: FC<ImageProps> = props => (
    <img
        css={css`
            width: 100%;
        `}
        alt={props.alt}
        src={props.src}
    />
);

export default Image;
