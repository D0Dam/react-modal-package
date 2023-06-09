import * as React from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

interface ModalProps {
  children?: React.ReactNode;
  isModalOpen?: boolean;
  closeModal?: () => void;
}

function Modal({ children, isModalOpen = false, closeModal }: ModalProps) {
  return createPortal(
    <>
      {isModalOpen && (
        <>
          <div className={styles['modal-backdrop']} onClick={closeModal} />
          <div role='dialog' className={styles['modal-wrapper']}>
            {children}
          </div>
        </>
      )}
    </>,
    document.body
  );
}

export default Modal;
