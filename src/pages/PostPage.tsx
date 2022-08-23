import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { Comments, Loader } from '../components';
import { getPageCount } from '../helpers/pagination';
import { useFetching } from '../hooks/useFetching';
import { IComment, IPostList } from '../interfaces/post.interface';
import { withLayout } from '../layout/Layout';

function PostPage () {
    const [post, setPost] = useState<IPostList> ();
    const [comment, setComment] = useState<IComment[]> ([]);
    const [isLoading, setIsLoading] = useState<boolean> (false);
    const [totalPages, setTotalPages] = useState (0);
    const [page, setPage] = useState<number> (1);
    const params = useParams ();

    //Подключение API поста
    const fetchPosts = async () => {
        setIsLoading (true);
        const response = await PostService.getById (params.id);
        const getComments = await PostService.getComments (params.id);
        response ? setPost (response.data) : console.log ('error');
        getComments ? setComment (getComments.data) : console.log ('error');
        setIsLoading (false);
    }

    useEffect (() => {
        fetchPosts ();
    }, [page])

    //Подключение API поста
    
      return (
        <>
          <div>
            <h1>Новость о {post?.title}</h1>
            {isLoading
                ? <Loader/>
                : <>
                    <img src='https://cdn2.tu-tu.ru/image/pagetree_node_data/1/8e144a2e2bfcf00eb7b90b88391e1932/' alt="img" style={{width: '80%', height:'auto'}}/> 
                    <div style={{marginTop: '30px'}}>{post?.body}</div> 
                    <Comments comments={comment}/>
                </> 
            }
            
          </div>
        </>
      );
}

export default PostPage;