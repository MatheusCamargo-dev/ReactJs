import { useEffect, useState, useRef } from 'react';
import fetchPosts from '../../utils/load-posts';
import fetchAnimes from '../../utils/load-anime-posts';
import Pagination from '../Pagination';
import Post from '../Post';
import { FaSearch } from 'react-icons/fa';
import Search from '../Search';
interface Post{
  id: number;
  title: string;
  body: string;
  img?: string;
}

interface InputChangeEvent extends Event {
  target: HTMLInputElement;
}

export default function Posts() {
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [postPerPage, setPostPerPage] = useState(10);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState<string>();

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
  
  useEffect(() => {
    if(search){
      const postsFilter = allPosts.filter(post => post.title.startsWith(search))
      setOffset(0);
      setPosts(postsFilter.slice(offset, postPerPage))
    }else{
      setOffset(0);
      setPosts(allPosts.slice(offset, postPerPage));
    }
  },[search])
  const handleChange = (e: any) => {
    const { value } = e.target;
    setSearch(value);
  }
  return (
    <div className="posts-content w-100 vh-100 d-flex flex-column">
        <Search text={'Search for posts:'} onChangeFunction={handleChange} onClickFunction={handleChange}/>
        <div className="col bg-dark w-100 text-white p-5" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px'
          }}
        >
              { posts.length > 0 ?
                posts.map((post: Post) => (
                    <Post key={post.id} post={post}/>
                )) : <h1 className='text-nowrap'>search: "{search}" NOT FOUND.</h1>
              }
        </div>
        
        <Pagination totalItems={allPosts?.length} limit={postPerPage} offset={offset} setOffset={setOffset} />
      </div>

  )
}