import React, { FC } from 'react';

import { trousers, useTrousers } from 'trousers';

export interface Props {
    src: string;
    alt?: string;
}

const styles = trousers('Image').element`
    width: 100%;
`;

const Image: FC<Props> = props => {
    const classNames = useTrousers(styles, props);

    return <img alt={props.alt} src={props.src} className={classNames} />;
};

export default Image;
