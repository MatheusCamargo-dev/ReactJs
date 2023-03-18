import { useEffect, useState } from 'react';
import fetchPosts from '../../utils/load-posts';
import Post from '../Post';
interface Post{
  id: number;
  title: string;
  body: string;
  img?: string;
}

export default function Posts() {
  
  const [posts, setPosts] = useState<Post[]>([]);

  const loadPosts = async () => {

    const postAndPhotos = await fetchPosts();
    setPosts(postAndPhotos);
  }


  useEffect(() => {
    loadPosts()
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
            <Post key={post.id} post={post}/>
          )) : null
        }
      </div>
  )
}