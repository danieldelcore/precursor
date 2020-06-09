import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { useStyles, css } from '@trousers/core';
import collector from '@trousers/collector';

import Theme from '@precursor/theme';
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
`;

const Modal: FC<ModalProps> = props => {
    const classNames = useStyles(modalStyles);

    // todo:
    // close on escape
    // focus capture
    // return focus

    if (!props.open) {
        return null;
    }

    return ReactDOM.createPortal(
        <Overlay>
            <div className={classNames}>{props.children}</div>
        </Overlay>,
        document.body,
    );
};

export default Modal;

export interface ModalBodyProps {
    children: ReactNode;
}

export const ModalBody: FC<ModalBodyProps> = props => {
    return (
        <div
            css={css`
                padding: 1rem;
            `}
        >
            {props.children}
        </div>
    );
};
