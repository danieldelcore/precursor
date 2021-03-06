import React, { FC, ReactNode } from 'react';
// @ts-ignoreE
import { css } from '@trousers/macro';

import Heading from '@precursor/heading';

export interface ModalHeaderProps {
    children: ReactNode;
}

const ModalHeader: FC<ModalHeaderProps> = ({ children }) => (
    <header
        id="modal-header"
        // @ts-ignore
        css={css('ModalHeader', {
            paddingTop: '1rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
        })}
    >
        <Heading>{children}</Heading>
    </header>
);

export default ModalHeader;
