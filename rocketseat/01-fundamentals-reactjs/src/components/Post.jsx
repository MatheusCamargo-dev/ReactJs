import { profileUrl } from '../utils/profileUrl'
import Avatar from './Avatar'
import Comment from './Comment'
import styles from './Post.module.css'

export default function Post() {


  return (
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
           <Avatar src={profileUrl} alt="" />
            <div className={styles.authorInfo}>
              <strong>Matheus Camargo</strong>
              <span>Web developer</span>
            </div>
          </div>

          <time dateTime='2023-05-26 04:30:00' title="26 de Maio às 04:30"> Publicado há 1h</time>

      </header>

      <div className={styles.content} >

        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '}<a href=""> jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form action="" className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe seu comentário'/>
        <footer>
          <button type="submit">Publicar</button>

        </footer>
      </form>
      
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
