import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { useStyles, styleCollector } from 'trousers';

import { Theme } from '../';

export interface ModalProps {
    active: boolean;
    onClickOutside: React.MouseEventHandler;
    onEscKeyPress: React.KeyboardEventHandler;
    children: ReactNode;
}

const modalStyles = styleCollector<ModalProps, {}, Theme>('Modal').element`
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
    const classNames = useStyles(modalStyles, props);

    // todo:
    // close on escape
    // focus capture
    // return focus

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

const modalBodyStyles = styleCollector<ModalBodyProps, {}, Theme>('ModalBody')
    .element`
    padding: 1rem;
`;

export const ModalBody: FC<ModalBodyProps> = props => {
    const classNames = useStyles(modalBodyStyles, props);

    return <div className={classNames}>{props.children}</div>;
};

export interface OverlayProps {
    children: ReactNode;
}

const overlayStyles = styleCollector('Overlay').element`
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.6);
`;

const Overlay: FC<OverlayProps> = props => {
    const classNames = useStyles(overlayStyles, props);

    return <div className={classNames}>{props.children}</div>;
};
