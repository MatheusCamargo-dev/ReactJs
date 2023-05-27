import { ThumbsUp, Trash } from 'phosphor-react'
import { profileUrl } from '../utils/profileUrl'
import styles from './Comment.module.css'
import Avatar from './Avatar'

export default function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src={profileUrl} alt="" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Matheus Camargo</strong>
                    <time dateTime='2023-05-26 04:30:00' title="26 de Maio às 04:30"> Cerca de 1h atrás</time>
                </div>

                <button title='Deletar comentário'>
                    <Trash size={24} />
                </button>
            </header>
            <p>Muito bom Devan, parabéns!! 👏</p>
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
