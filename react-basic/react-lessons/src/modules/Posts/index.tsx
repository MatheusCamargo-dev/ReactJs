import { useEffect, useState, useRef } from 'react';
import fetchPosts from '../../utils/load-posts';
import fetchAnimes from '../../utils/load-anime-posts';
import Pagination from '../Pagination';
import Post from '../Post';
import { FaSearch } from 'react-icons/fa';
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
        <h2 className='text-white text-center mt-3'>Search for posts:</h2>
        <div className="input-group d-flex justify-content-center vh-0 mt-1">
          <div className="form-outline" style={{ height: "38px" }}>
            <input type="search" value={search} onChange={handleChange} placeholder="Search..."className="form-control" style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}} key="form2" />
          </div>
          <button type="button" className="btn btn-primary btn-sm">
            <FaSearch />
          </button>
        </div>
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