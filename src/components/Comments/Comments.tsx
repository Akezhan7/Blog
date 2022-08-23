import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import style from './Comments.module.scss';
import cn from 'classnames';
import { IComment, IPostList } from '../../interfaces/post.interface'
import { v4 as uuidv4 } from 'uuid';
import UserIcon from './user.png';
import EmailIcon from './Email.png';
import MessageIcon from './Message.png';

interface CommentsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    comments: IComment[];
}

export const Comments = ({comments, ...props}:CommentsProps):JSX.Element => {
  return (
        <div {...props} className={style.wrapper}>
            <h3>Комментарии</h3>
            <div className={style.comm}>
                {comments.map (item => 
                    <div className={style.comments} key={uuidv4()}>
                        <div className={style.block}>
                            <div className={style.logo}><img src={UserIcon} alt="usericon" /></div>
                            <div className={style.name}>{item.name}</div>
                        </div>
                        <div className={style.block}>
                            <div className={style.logo}><img src={EmailIcon} alt="emailicon" /></div>
                            <div className={style.name}>{item.email}</div>
                        </div>
                        <div className={style.block}>
                            <div className={style.logo}><img src={MessageIcon} alt="messageicon" /></div>
                            <div className={style.name}>{item.body}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
  )
}