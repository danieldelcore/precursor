/** @jsx jsx */
import { FC, ReactNode } from 'react';
import { css, jsx } from '@trousers/core';
import { Theme } from '@precursor/theme';
import Inline from '@precursor/inline';

export interface ModalFooterProps {
    children: ReactNode;
}

const ModalFooter: FC<ModalFooterProps> = ({ children }) => (
    <footer
        css={css<Theme>`
            padding: 1rem;
            border-top: ${({ border }) =>
                `${border.size[0]} solid ${border.color.base}`};
        `}
    >
        <Inline justify="flex-end">{children}</Inline>
    </footer>
);

export default ModalFooter;
