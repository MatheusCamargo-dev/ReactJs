import { useEffect, useState, useRef } from 'react';
import fetchAnimes from '../../utils/load-anime-posts';
import Pagination from '../Pagination';
import {FaSearch} from 'react-icons/fa'
import Animes from '../../pages/Animes';
import Search from '../Search';
import Loading from '../Loading';
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
  const [postPerPage, setPostPerPage] = useState(10);
  const [search, setSearch] = useState<string>('');
  const [offset, setOffset] = useState(0);
  const [totItems, setTotItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const inputSearch = useRef<HTMLInputElement>(null);

  const loadPosts = async () => {
    setIsLoading(true);
    const animes = await fetchAnimes();
    setPosts(animes.slice(offset, postPerPage));
    setAllPosts(animes);
    setIsLoading(false);
  }
  
  useEffect(() => {
    console.log(allPosts.length)
    // setTotItems(allPosts.length)
  }, [allPosts]);

  const searchAnime = (e: any) => {
    const { value } = e.target;
    setSearch(value);
  }
  useEffect(() => {
     const request = async () => {
       setIsLoading(true);
       setPosts([]);
       const animes = await fetchAnimes(search);
       setPosts(animes.slice(offset, postPerPage));
       setAllPosts(animes);
       setOffset(0);
       setIsLoading(false);
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
        <Loading load={isLoading} />
        
        <div className="col bg-dark w-100 text-white p-5" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(325px, 1fr))',
            gap: '30px'
          }}
        >
              { posts.length == 0 && search?.length > 0 && isLoading == false ? 
               <h1 className='text-nowrap'>search: "{search}" NOT FOUND.</h1> :
               posts.map((post: Animes) => (
                    <Animes key={post.id} post={post}/>
                ))
              }
        </div>
        
        <Pagination totalItems={allPosts.length} limit={postPerPage} offset={offset} setOffset={setOffset} />
      </div>

  )
}