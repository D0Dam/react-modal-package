import * as React from 'react';
interface ModalProps {
    children?: React.ReactNode;
    isModalOpen?: boolean;
    closeModal?: () => void;
}
declare function Modal({ children, isModalOpen, closeModal }: ModalProps): any;
export default Modal;
