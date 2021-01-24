import React, { FC } from 'react';
import { css } from '@trousers/macro';

import Image, { ImageProps } from '@precursor/image';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarProps extends ImageProps {}

const styles = css('Avatar', {
    display: 'inline-block',
    position: 'relative',
    outline: '0px',
    height: '64px',
    width: '64px',
    overflow: 'hidden',
    borderRadius: '50%',
});

const Avatar: FC<AvatarProps> = ({ src, alt }) => (
    <span css={styles}>
        <Image src={src} alt={alt} />
    </span>
);

export default Avatar;
