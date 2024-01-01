import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './comment.module.css'
import { Avatar } from '../avatar/Avatar'
import { useState } from 'react'
import { Modal } from '../modal/Modal';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  function handleDeleteComment() {
    setModalOpen(true)
    // onDeleteComment(content)
  }

  function handleConfirmDelete() {
    setModalOpen(false)
    
    setTimeout(() => {
      onDeleteComment(content);
    }, 150);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1;
    })
  }

  return(
    <div className={styles.comment}>
      <Avatar src="https://github.com/LFeli.png" hasBorder={false}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Felipe</strong>
              <time title='16 de Dezembro as 16:00h' dateTime='2023-12-16 16:00:00'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

      <Modal isOpen={modalOpen} onClose={handleCloseModal} onConfirm={handleConfirmDelete}/>
    </div>
  )
}