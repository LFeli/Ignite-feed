import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/LFeli.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Felipe</strong>
              <time title='16 de Dezembro as 16:00h' dateTime='2023-12-16 16:00:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}