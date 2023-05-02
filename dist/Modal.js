import * as React from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
function Modal({ children, isModalOpen = false, closeModal }) {
    return createPortal(React.createElement(React.Fragment, null, isModalOpen && (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles['modal-backdrop'], onClick: closeModal }),
        React.createElement("div", { role: 'dialog', className: styles['modal-wrapper'] }, children)))), document.body);
}
export default Modal;
