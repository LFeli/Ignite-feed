import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import styles from './Post.module.css';

export function Post() {
  return (  
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/LFeli.png"/>

          <div className={styles.authorInfo}>
            <strong>Lucas Felipe</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title='16 de Dezembro as 16:00h' dateTime='2023-12-16 16:00:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        
        <p> 👉 <a href="#">jane.design/doctorcare</a></p>
        
        <p>
          <a href="#">#novoprojeto</a> 
          <a href="#">#nlw</a> 
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}