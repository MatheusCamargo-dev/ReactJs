import { useEffect, useState, useRef } from 'react';
import fetchPosts from '../../utils/load-posts';
import fetchAnimes from '../../utils/load-anime-posts';
import Pagination from '../Pagination';
import Post from '../Post';
interface Post{
  id: number;
  title: string;
  body: string;
  img?: string;
}

export default function Posts() {
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [postPerPage, setPostPerPage] = useState(10);
  const [offset, setOffset] = useState(0);

  const loadPosts = async () => {
    const postAndPhotos = await fetchPosts();
    setPosts(postAndPhotos.slice(offset, postPerPage));
    setAllPosts(postAndPhotos);
  }

  useEffect(() => {
    loadPosts()
  }, []);

  useEffect(() => {
    setPosts(allPosts.slice(offset, postPerPage + offset));
  },[offset])
  
  return (
    <div className="posts-content w-100 vh-100 d-flex flex-column">

        <div className="col bg-dark w-100 text-white p-5" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px'
          }}
        >
              {posts.map((post: Post) => (
                  <Post key={post.id} post={post}/>
              ))}
        </div>
        
        <Pagination totalItems={allPosts?.length} limit={postPerPage} offset={offset} setOffset={setOffset} />
      </div>

  )
}