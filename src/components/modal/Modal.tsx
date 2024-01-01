import { useEffect, useState } from 'react';
import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean | null;
  onClose: () => void;
  onConfirm: () => void;
}

export function Modal({ isOpen = false, onClose, onConfirm }: ModalProps) {
  const [openModal, setOpenModal] = useState(isOpen);

  useEffect(() => {
    setOpenModal(isOpen);

    // Adicione ou remova a classe no body dependendo do estado do modal
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    // Função de limpeza para restaurar o overflow quando o componente é desmontado
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  function handleCloseButton() {
    onClose();
  }

  function handleConfirmButton() {
    if (onConfirm) {
      onConfirm();
    }

    handleCloseButton()
  }

  return (
    <div className={openModal ? styles.box : styles.boxClosed}>
      <div className={openModal ? styles.modal : styles.modalClosed}>
        <h3 className={styles.title}>Excluir comentário</h3>
        <span className={styles.subtitle}>Você tem certeza que gostaria de excluir este comentário?</span>

        <div className={styles.buttonWrapper}>
          <button onClick={handleCloseButton}>Cancelar</button>
          <button onClick={handleConfirmButton}>Sim, excluir</button>
        </div>
      </div>
    </div>
  );
}