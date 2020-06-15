/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { css, jsx } from '@trousers/core';

export interface ModalBodyProps {
    children: ReactNode;
}

const ModalBody: FC<ModalBodyProps> = ({ children }) => (
    <div
        id="modal-body"
        css={css`
            padding: 0 1rem;
            flex: 1 1 0%;
        `}
    >
        {children}
    </div>
);

export default ModalBody;
