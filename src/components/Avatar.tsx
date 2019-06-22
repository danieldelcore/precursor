import React, { FC } from 'react';
import { trousers, useTrousers } from 'trousers';

import { Image, ImageProps } from '../';

export interface Props extends ImageProps {
    href: string;
}

const styles = trousers('Avatar').element`
    display: inline-block;
    position: relative;
    outline: 0px;
    height: 64px;
    width: 64px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #D1D1D1;

    &:focus,
    &:hover {
        border: 1px solid #33C3F0;
        outline: 0;
    }
`;

const Avatar: FC<Props> = props => {
    const classNames = useTrousers(styles, props);

    return (
        <a className={classNames} href={props.href} target="_blank">
            <Image src={props.src} alt={props.alt} />
        </a>
    );
};

export default Avatar;
