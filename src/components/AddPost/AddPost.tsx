import React, { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction, useState } from 'react'
import style from './AddPost.module.scss';
import cn from 'classnames';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { v4 as uuidv4 } from 'uuid';
import { IPostList } from '../../interfaces/post.interface';

interface AddPostProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    create: (newPost: IPostList) => void;
    
}

export const AddPost = ({create,...props}:AddPostProps):JSX.Element => {

  const [post, setPost] = useState ({title: '', body: '', image: ''})

  const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault ();
      const newPost = {
        ...post, id: uuidv4(), userId: '',
      }

      create (newPost);
      setPost ({title: '', body: '', image: ''})

  }

  return (
        <div className={cn(style.wrapper)}>
            <form action="">
                <h3 style={{marginLeft:'27%'}}>Добавить пост</h3>
                <Input value={post.title} onChange={e => setPost({...post, title: e.target.value})} text='Заголовок' id='title'/>
                <Input value={post.body} onChange={e => setPost({...post, body: e.target.value})} text='Описание' id='description'/>
                <Input value={post.image} onChange={e => setPost({...post, image: e.target.value})} text='Картинка' id='image'/>
                <Button onClick={addNewPost}>Добавить</Button>
            </form>
        </div>
  )
}