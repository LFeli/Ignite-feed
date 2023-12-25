import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import styles from './Post.module.css';
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { 
    locale: ptBR 
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText([event.target.value])
  }

  function deleteComment(commentsToDelete) {
    const commentsWithoutDeletedOne = comments.filter( comment => {
      return comment !== commentsToDelete; 
    } )

    setComments(commentsWithoutDeletedOne)
  }

  return (  
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map( line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link'){
            <p key={line.content}><a href="#">{line.content}</a></p>
          }   
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário' 
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange} 
        />

        <footer>
          <button type='submit'>publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map( comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  );
}