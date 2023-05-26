import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react';

export default function Sidebar() {

  const coverUrl = 'https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
  const profileUrl = 'https://github.com/MatheusCamargo-dev.png'
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src={coverUrl}
        alt=""
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src={profileUrl} alt="" />
        <strong>Matheus Camargo</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
