import React, { FC, ReactNode } from 'react';
import { css } from '@trousers/macro';

export interface ModalBodyProps {
    children: ReactNode;
}

const ModalBody: FC<ModalBodyProps> = ({ children }) => (
    <div
        id="modal-body"
        css={css('ModalBody', {
            padding: '0 1rem',
            flex: '1 1 0%',
        })}
    >
        {children}
    </div>
);

export default ModalBody;
