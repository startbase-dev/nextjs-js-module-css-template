'use client';

import {
  GlobalModals,
  ModalProvider,
  Modal as ReactModal,
  useModal,
} from '@start-base/react-modal';

import styles from './Modal.module.scss';

const Modal = ({ ...props }) => (
  <ReactModal
    appElement="html"
    {...props}
    className={styles.modal}
    overlayClassName={styles.overlay}
  />
);

export { Modal, GlobalModals, ModalProvider, useModal };
