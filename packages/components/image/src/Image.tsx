import React, { FC } from 'react';

export interface ImageProps {
    src: string;
    alt?: string;
}

const Image: FC<ImageProps> = props => (
    <img style={{ width: '100%' }} alt={props.alt} src={props.src} />
);

export default Image;
