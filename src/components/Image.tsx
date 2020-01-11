import React, { FC } from 'react';
import { styleCollector, useStyles } from 'trousers';

export interface Props {
    src: string;
    alt?: string;
}

const styles = styleCollector('Image').element`
    width: 100%;
`;

const Image: FC<Props> = props => {
    const classNames = useStyles(styles, props);

    return <img alt={props.alt} src={props.src} className={classNames} />;
};

export default Image;
