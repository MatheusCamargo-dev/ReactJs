import { useEffect, useState } from 'react'
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
interface Repository{
  id: number,
  name: string,
  favorite: boolean | null,
}
export default function Repositories() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  
  useEffect(() => {
    const api = async () => {
      const response = await fetch('https://api.github.com/users/MatheusCamargo-dev/repos') 
      const data = await response.json();
      console.log(data);
      setRepositories(data)
    }
    api()
  }, []);

  const handleFavorite = (id: number) => {
    const newRepositories = repositories.map( repo => {
      return repo.id === id ? { ...repo, favorite: true} : repo
    });

    setRepositories(newRepositories);
  }

  return(
    <div className='col mt-5 text-info'>
      <h1>Repositories GitHub:</h1>
      <ul>
        {repositories.map(repo => 
            <li key={repo.id}>
              {repo.name}
              {repo.favorite ? <MdOutlineFavorite
              /> : <MdOutlineFavoriteBorder   
              onClick={() => handleFavorite(repo.id)}/>
              }
            </li>
          
        )}
      </ul>
    </div>
  );
}

