import React, { FC, ReactNode } from 'react';
// @ts-ignoreE
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';
import Inline from '@precursor/inline';

export interface ModalFooterProps {
    children: ReactNode;
}

const ModalFooter: FC<ModalFooterProps> = ({ children }) => (
    <footer
        // @ts-ignore
        css={css('ModalFooter', {
            padding: '1rem',
            borderTop: `var(--border-size-0) solid var(--border-color-base)`,
        })}
    >
        <Inline justify="flex-end">{children}</Inline>
    </footer>
);

export default ModalFooter;
