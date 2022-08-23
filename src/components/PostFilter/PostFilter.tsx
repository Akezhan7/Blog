import React, { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react'
import style from './PostFilter.module.scss';
import cn from 'classnames';
import { IPostList } from '../../interfaces/post.interface'
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { DropDown } from '../UI/DropDown/DropDown';

interface PostFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    filter: {sort: string; query: string;};
    setFilter: Dispatch<SetStateAction<{ sort: string; query: string; }>>;
}

export const PostFilter = ({filter, setFilter, ...props}:PostFilterProps):JSX.Element => {
  return (
        <div className={style.wrap} {...props} >
            <DropDown 
                value={filter.sort} 
                onSort={selectedSort => setFilter ({...filter, sort: selectedSort})} 
                defaultValue='Сортировка' 
                options={[{value: 'title', name: 'По названию'}, 
                {value: 'body', name: 'По описанию'}]}
            />
            <Input 
                id='search' 
                text='поиск' 
                value={filter.query} 
                onChange={e => setFilter({...filter, query: e.target.value})}
                style={{marginBottom:'0px'}}
            />
        </div>
  )
}