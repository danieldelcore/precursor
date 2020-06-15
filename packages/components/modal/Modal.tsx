import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';
import Overlay from '@precursor/overlay';

export interface ModalProps {
    open?: boolean;
    onClickOutside: React.MouseEventHandler;
    onEscKeyPress: React.KeyboardEventHandler;
    children: ReactNode;
}

const modalStyles = collector<Theme>('Modal').element`
    max-width: 520px;
    min-height: 320px;
    width: 100%;
    border-radius: 5px;
    margin: 0.5rem;
    background-color: #fff;
    display: block;
    transform: translate3d(0px, 0%, 0px);
    position: relative;
    display: flex;
    flex-direction: column;
`;

const Modal: FC<ModalProps> = props => {
    const classNames = useStyles(modalStyles);

    // todo:
    // close on escape
    // focus capture
    // return focus
    // A11y
    // ensure IDs are unique

    if (!props.open) {
        return null;
    }

    return ReactDOM.createPortal(
        <Overlay>
            <section
                role="dialog"
                aria-modal="true"
                tab-index="-1"
                id="modal"
                aria-describedby="modal-body"
                aria-labelledby="modal-header"
                className={classNames}
            >
                {props.children}
            </section>
        </Overlay>,
        document.body,
    );
};

export default Modal;
