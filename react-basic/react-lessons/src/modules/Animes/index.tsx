interface AttributesAnimes{
  id: number;
  titles: {en: string, en_jp: string, ja_jp: string};
  description: string;
  posterImage: any;
}
interface Animes{
  attributes: AttributesAnimes;
}

interface Props{
  post: Animes
}
export default function Animes(props: Props) {
  const post = props.post.attributes;
  const { posterImage, titles, description } = post;
  return (
        <div className="post bg-white">
          <img src={posterImage.original} alt={titles.en_jp} className="w-100"/>
          <div key={post.id} className=' text-dark p-2 text-left'>
            <h3>{titles.en_jp}</h3>
            <p className="fs-6 text-size-sm display-1"><span className='text-primary'>Description: </span>{description.length >= 500 ? description.slice(0, 500)+'...' : description }</p>
          </div>
        </div>
  )
}