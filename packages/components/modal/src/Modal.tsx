import React, {
    FC,
    ReactNode,
    useRef,
    useCallback,
    KeyboardEvent,
    MouseEvent,
} from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { css } from '@trousers/macro';

// import { Theme } from '@precursor/theme';
import Overlay from '@precursor/overlay';

export interface ModalProps {
    isOpen?: boolean;
    onDismiss: () => void;
    children: ReactNode;
}

const styles = css('Modal', {
    maxWidth: '520px',
    minHeight: '320px',
    width: '100%',
    borderRadius: '5px',
    margin: '0.5rem',
    backgroundColor: '#fff',
    transform: 'translate3d(0px, 0%, 0px)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
});

// TODO: ensure IDs are unique
const Modal: FC<ModalProps> = ({ onDismiss, children, isOpen }) => {
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
                          css={styles}
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
