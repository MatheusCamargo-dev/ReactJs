import Header from "./components/Header"
import styles from './App.module.css'
import Post from './components/Post'
import './global.css'
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Matheus Camargo"
            content="Imagine a very cool post"
            />
        </main>
      </div>
    </div>
  )
}

export default App
