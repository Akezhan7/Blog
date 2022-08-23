import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import style from './PostItem.module.scss';
import cn from 'classnames';
import { IPostList } from '../../interfaces/post.interface'
import { Button } from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';

interface PostItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: IPostList;
    remove: (post: IPostList) => void;
}

export const PostItem = ({remove, item, ...props}:PostItemProps):JSX.Element => {
    const router = useNavigate ()
  return (
        <div className="col s12 m6 maxh" {...props}>
            <div className="card">
                <div className="card-image">
                    <img src='https://cdn2.tu-tu.ru/image/pagetree_node_data/1/8e144a2e2bfcf00eb7b90b88391e1932/' alt="img" className={cn(style.img)}/>
                    <span className="card-title">{item.title}</span>
                </div>
                <div className="card-content">
                    <p>{item.body}.</p>
                </div>
                <div className="card-action">
                    <Button onClick={() => router(`/posts/${item.id}`)}>Открыть</Button>
                </div>
                <div className="card-action">
                    <Button onClick={() => remove(item)}>Удалить</Button>
                </div>
            </div>
        </div>
  )
}