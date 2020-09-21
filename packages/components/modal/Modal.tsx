import React, {
    FC,
    ReactNode,
    useRef,
    useCallback,
    KeyboardEvent,
    MouseEvent,
} from 'react';
import { createPortal } from 'react-dom';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';
import FocusLock from 'react-focus-lock';

import { Theme } from '@precursor/theme';
import Overlay from '@precursor/overlay';

export interface ModalProps {
    isOpen?: boolean;
    onDismiss: () => void;
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

// TODO: ensure IDs are unique

const Modal: FC<ModalProps> = ({ onDismiss, children, isOpen }) => {
    const classNames = useStyles(modalStyles);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.stopPropagation();
                onDismiss();
            }
        },
        [onDismiss],
    );

    const handleClick = useCallback(
        (event: MouseEvent) => {
            event.stopPropagation();
            if (overlayRef.current !== event.target) return;
            onDismiss();
        },
        [onDismiss],
    );

    return isOpen
        ? createPortal(
              <Overlay
                  ref={overlayRef}
                  onKeyDown={handleKeyDown}
                  onClick={handleClick}
              >
                  <FocusLock returnFocus>
                      <section
                          role="dialog"
                          aria-modal="true"
                          tab-index="-1"
                          id="modal"
                          aria-describedby="modal-body"
                          aria-labelledby="modal-header"
                          className={classNames}
                      >
                          {children}
                      </section>
                  </FocusLock>
              </Overlay>,
              document.body,
          )
        : null;
};

export default Modal;
