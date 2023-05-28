import Avatar from './Avatar'
import Comment from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import Time from './Time'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link' | 'hashtags'
  content: string[];
}

export interface PostProps {
  id?: string;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface Comment {
  id: string;
  content: string;
  publishedAt: Date;
}

export default function Post({author, content, publishedAt}: PostProps) {

  const [comments , setComments] = useState<Comment[]>([{id: crypto.randomUUID(), content:'Post muito bacana!', publishedAt: new Date('2023-05-27 16:55:00')}]);

  const [newCommentText, setNewCommentText] = useState<Comment>({id: '0', content: '', publishedAt: new Date()});
  
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    if(newCommentText.content.length === 0) return;
    setComments(state => [...state, newCommentText])
    setNewCommentText({id: '0', content: '', publishedAt: new Date()})
  }

  function handleNewCommentChange (event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText({ id: crypto.randomUUID() , content: event.target.value, publishedAt: new Date()})
  }

  function deleteComment (commentToDeleteID: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment.id !== commentToDeleteID)
    setComments(commentsWithoutDeletedOne)
  }
  
  const isNewCommentEmpty = newCommentText.content.length === 0;

  return (
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
           <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          

          <Time publishedAt={publishedAt} />

      </header>

      <div className={styles.content}>
        {
          content.map((data, index) => {
            switch (data.type) {
              case 'paragraph':
                return <p key={index}>{data.content}</p>
              case 'link':
                return <a href="" key={index}>👉 {data.content}</a>;
              case 'hashtags':
                return (
                  <p key={index}>
                    {data.content.map((hashtag) => { return (<a href='' key={crypto.randomUUID()}>#{hashtag}</a> ) })}
                  </p>
                );
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe seu comentário' 
          onChange={handleNewCommentChange} 
          value={newCommentText.content}
          name="comment" 
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>

        </footer>
      </form>
      
      <div className={styles.commentList}>
        {
          comments.map(comment => <Comment key={comment.id} id={comment.id} content={comment.content} onDeleteComment={deleteComment} data={comment.publishedAt} />)
        }
      </div>
    </article>
  )
}
