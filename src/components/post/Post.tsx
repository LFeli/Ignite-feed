import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date; 
  content: Content[];
  comments: string[];
}

interface PostProps {
  post: PostType;
} 

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState( post.comments || [])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { 
    locale: ptBR
  })

  const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentsToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter( comment => {
      return comment !== commentsToDelete; 
    } )

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (  
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map( line => {
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
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment 
              key={index} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  );
}