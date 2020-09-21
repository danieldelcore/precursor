/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@trousers/core';

import Image, { ImageProps } from '@precursor/image';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarProps extends ImageProps {}

const Avatar: FC<AvatarProps> = ({ src, alt }) => (
    <span
        css={css`
            display: inline-block;
            position: relative;
            outline: 0px;
            height: 64px;
            width: 64px;
            overflow: hidden;
            border-radius: 50%;
        `}
    >
        <Image src={src} alt={alt} />
    </span>
);

export default Avatar;
