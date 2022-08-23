import React, { ButtonHTMLAttributes, DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction} from 'react'
import style from './Pagination.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { usePagination } from '../../../hooks/usePagination';

interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    page: number;
    totalPages: number;
    changePage: (p: number) => void;
}

export const Pagination = ({page, totalPages, changePage,...props}:PaginationProps):JSX.Element => {
  const pagesArr = usePagination (totalPages);
  return (
    <ul className="pagination pagWrap" {...props}>
      {pagesArr.map (p => 
        <li 
          key={uuidv4()} 
          className={cn ('waves-effect', {
            'active' : page === p
          })}
          onClick={() => changePage(p)}
          ><a href="#!">{p}</a></li>
      )}
  </ul>
  )
}