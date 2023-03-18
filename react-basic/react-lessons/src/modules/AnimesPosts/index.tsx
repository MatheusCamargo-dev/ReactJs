import { useEffect, useState, useRef } from 'react';
import fetchAnimes from '../../utils/load-anime-posts';
import Pagination from '../Pagination';
import {FaSearch} from 'react-icons/fa'
import Animes from '../Animes';
interface AttributesAnimes{
  id: number;
  titles: {en: string, en_jp: string, ja_jp: string};
  description: string;
  posterImage: any;
}
interface Animes{
  attributes: AttributesAnimes;
}

export default function AnimesPosts() {
  
  const [posts, setPosts] = useState<Animes[]>([]);
  const [allPosts, setAllPosts] = useState<Animes[]>([]);
  const [postPerPage, setPostPerPage] = useState(8);
  const [search, setSearch] = useState<string>();
  const [offset, setOffset] = useState(0);
  const inputSearch = useRef<HTMLInputElement>(null);

  const loadPosts = async () => {
    const animes = await fetchAnimes();
    setPosts(animes.slice(offset, postPerPage));
    setAllPosts(animes);
  }

  const searchAnime = () => {
    const text = inputSearch.current?.value.toLowerCase().replace(/\s+/g, '');
    setSearch(text);
   
  }

  useEffect(() => {
     const request = async () => {
       const animes = await fetchAnimes(search);
       setPosts(animes.slice(offset, postPerPage));
       setAllPosts(animes);
       setOffset(0);
     }
     request();
  }, [search])
  useEffect(() => {
    if(posts.length == 0){
      loadPosts()
    }
  }, []);

  useEffect(() => {
    setPosts(allPosts.slice(offset, postPerPage + offset));
  },[offset])
  
  return (
    <div className="posts-content w-100 vh-100 d-flex flex-column">
        <h2 className='text-white text-center mt-3'>Search for animes:</h2>
        <div className="input-group d-flex justify-content-center vh-0 mt-1">
          <div className="form-outline" style={{ height: "38px" }}>
            <input type="search" onBlur={searchAnime} ref={inputSearch} placeholder="Search..."className="form-control" style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}} key="form2" />
          </div>
          <button type="button" className="btn btn-primary btn-sm">
            <FaSearch />
          </button>
        </div>


        <div className="col bg-dark w-100 text-white p-5" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '30px'
          }}
        >
              {posts.map((post: Animes) => (
                  <Animes key={post.attributes.id} post={post}/>
              ))}
        </div>
        
        <Pagination totalItems={allPosts?.length} limit={postPerPage} offset={offset} setOffset={setOffset} />
      </div>

  )
}