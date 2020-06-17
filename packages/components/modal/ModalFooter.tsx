/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { css, jsx } from '@trousers/core';
import { Theme } from '@precursor/theme';

export interface ModalFooterProps {
    children: ReactNode;
}

const ModalFooter: FC<ModalFooterProps> = ({ children }) => (
    <footer
        css={css<Theme>`
            display: flex;
            justify-content: flex-end;
            padding: 1rem;
            border-top: ${({ border }) =>
                `${border.size[0]} solid ${border.color.base}`};
        `}
    >
        {children}
    </footer>
);

export default ModalFooter;
