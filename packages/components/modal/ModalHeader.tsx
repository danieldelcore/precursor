/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { css, jsx } from '@trousers/core';
import Heading from '@precursor/heading';

export interface ModalHeaderProps {
    children: ReactNode;
}

const ModalHeader: FC<ModalHeaderProps> = ({ children }) => (
    <header
        id="modal-header"
        css={css`
            padding-top: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
        `}
    >
        <Heading>{children}</Heading>
    </header>
);

export default ModalHeader;
