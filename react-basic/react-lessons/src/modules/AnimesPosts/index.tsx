import { useEffect, useState, useRef } from 'react';
import fetchAnimes from '../../utils/load-anime-posts';
import Pagination from '../Pagination';
import {FaSearch} from 'react-icons/fa'
import Animes from '../Animes';
import Search from '../Search';
interface AttributesAnimes{
  id: number;
  titles: {en: string, en_jp: string, ja_jp: string};
  description: string;
  posterImage: any;
}
interface Animes{
  attributes: AttributesAnimes;
  id: number;
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

  const searchAnime = (e: any) => {
    const { value } = e.target;
    const text = value.toLowerCase().replace(/\s+/g, '');
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
        <Search text={'Search for animes:'} onBlurFunction={searchAnime} onKeyUpFunction={searchAnime} />


        <div className="col bg-dark w-100 text-white p-5" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '30px'
          }}
        >
              {posts.map((post: Animes) => (
                  <Animes key={post.id} post={post}/>
              ))}
        </div>
        
        <Pagination totalItems={allPosts?.length} limit={postPerPage} offset={offset} setOffset={setOffset} />
      </div>

  )
}