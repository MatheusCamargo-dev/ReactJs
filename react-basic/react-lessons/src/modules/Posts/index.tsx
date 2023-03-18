import { useEffect, useState } from 'react'
interface Post{
  id: number;
  title: string;
  body: string;
  img?: string;
}

export default function Posts() {
  
  const [posts, setPosts] = useState<Post[]>([]);

  const loadPosts = async () => {
    const dataPosts = await fetch('https://jsonplaceholder.typicode.com/posts') 
    const data = await dataPosts.json();
    const dataPhotos = await fetch('https://jsonplaceholder.typicode.com/photos') 
    const photos = await dataPhotos.json();
    const postAndPhotos = data.map((post: Post, index:number) => {
      return { ...post, img: photos[index].url}
    })
    setPosts(postAndPhotos);
  }

  const loadPhotos = async () => {
    
  }

  useEffect(() => {
    loadPosts()
    loadPhotos()
  }, []);
  
  return (
      <div className="col bg-dark w-100 vh-100 text-white p-5" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px'
      }}>
        {
          posts ?
          posts.map((post: Post) => (
            <div className="post bg-white">
              <img src={post?.img} alt={post.title} className="w-100"/>
              <div key={post.id} className=' text-dark p-2 text-left'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>

            </div>
          )) : null
        
        }
      </div>
  )
}