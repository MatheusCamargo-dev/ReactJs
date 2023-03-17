import { useEffect, useState } from 'react'
import Location from '../Location';
import Repositories from '../Repositories';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [posts, setPosts] = useState([
    {
        id: 1,
        title: 'The title 1',
        body: 'The body 1'
    },
    {
        id: 2,
        title: 'The title 2',
        body: 'The body 2'
    },
    {
        id: 3,
        title: 'The title 3',
        body: 'The body 3'
    }
  ])

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        posts[0].title = 'componentDidMount'
        setPosts(posts)
        setCounter(1)
    }, 5000);
  })

  useEffect(() => {
    posts[1].title = 'ComponentDidUpdate'
  },[counter])

  useEffect(() => {

    return () => {
      // posts[3].title = 'componenteWillUnmount'
      console.log('componentWillUnmout')
    }
  },[])

  //   
  return (
    <div className="App d-flex">
      <div className="col">
        <h1 className='text-info mb-3 mt-5'>Life Cycles:</h1>
        {posts.map(post => {
          return (
              <div className="col me-5 d-flex flex-column text-white" key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{counter}</p>
                  <p>{post.body}</p>
              </div>
          )
        })}
      </div>
       <Repositories/>
       <Location />
    </div>
  )
}

export default App
