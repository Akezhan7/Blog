import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import './PostList.module.scss';
import { IPostList } from '../../interfaces/post.interface';
import { PostItem } from '../PostItem/PostItem';
import { v4 as uuidv4 } from 'uuid';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
interface PostListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: IPostList[];
    remove: (post: IPostList) => void;
}

export const PostList = ({remove, items, ...props}:PostListProps):JSX.Element => {
  if (!items.length) {
    return (
      <h1 style={{textAlign: 'center'}}>Посты не найдены...</h1>
    )
  }
  return (
    <div className='row' {...props}>
        <TransitionGroup>
            {items.map (p => (
              <CSSTransition
                key={p.id}
                timeout={300}
                classNames="post"
              >
                <PostItem remove={remove} item={p}/>
              </CSSTransition>
            ))}
        </TransitionGroup>
        
    </div>
  )
}
