import { useEffect, useState } from 'react'

interface Props{
  limit: number;
  totalItems: number;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const MAX_ITEMS = 7;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export default function Pagination(props: Props) {
  const {limit, totalItems, offset, setOffset} = props;
  const currentPage = offset ? (offset / limit) + 1 : 1;
  const totPages = Math.ceil(totalItems / limit);
  const firstItem = Math.max(currentPage - MAX_LEFT, 1);

  const previousPage = () => {
    if(currentPage <= 1) return;
    setOffset(offset - limit)
  }
  
  const nextPage = () => {
    if(currentPage >= totPages) return;
    setOffset(offset +  limit)
  }

  const onPageChange = (page: number) => {
    setOffset((page - 1) * limit)
  }
  return(
    <div className='d-flex justify-content-center'>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item ">
            <a className={ currentPage <= 1 ? "page-link active" : "page-link"} onClick={previousPage} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
            {Array.from({length: Math.min(MAX_ITEMS)}).map( (val, index) => {
              const page = index + firstItem;
              if(page > totPages) return;
              return (<li className={page === currentPage ? "page-item active": "page-item"} onClick={() => onPageChange(page)} key={index + firstItem} aria-current="page"><a className="page-link" href="#">{page}</a></li>)
            }
            )}
          <li className="page-item">
            <a className={ currentPage >= totPages ? "page-link active" : "page-link"} onClick={nextPage} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

