import Header from "./components/Header"
import styles from './App.module.css'
import Post from './components/Post'
import {PostProps} from './components/Post'
import './global.css'
import Sidebar from "./components/Sidebar"

const posts: PostProps[] = [
  {
    id: crypto.randomUUID(),
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: ['Fala galeraa 👋']},
      { type: 'paragraph', content: ['Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀']},
      { type: 'link', content: ['jane.design/doctorcare']},
      { type: 'hashtags', content: ['novoprojeto', 'nlw', 'rocketseat']}
    ],
    publishedAt: new Date('2023-05-27 15:55:00')
  },
  {
    id: crypto.randomUUID(),
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: ['Fala galeraa 👋']},
      { type: 'paragraph', content: ['Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀']},
      { type: 'link', content: ['jane.design/doctorcare']},
      { type: 'hashtags', content: ['novoprojeto', 'nlw', 'rocketseat']}
    ],
    publishedAt: new Date('2023-05-28 15:55:00')
  },
]


function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
