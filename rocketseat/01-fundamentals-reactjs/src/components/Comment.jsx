import { ThumbsUp, Trash } from 'phosphor-react'
import { profileUrl } from '../utils/profileUrl'
import styles from './Comment.module.css'
import Avatar from './Avatar'
import Time from './Time'
import { useState } from 'react'

export default function Comment({id ,content, data, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(id)
  }

  function handleLikeComment(){
    setLikeCount(likeCount => likeCount + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar src={profileUrl} alt="" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Matheus Camargo</strong>
                    <Time publishedAt={data} />
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
    </div>
  )
}
