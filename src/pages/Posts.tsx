
import React, { useEffect, useMemo, useRef, useState } from 'react';
import PostService from '../API/PostService';
import { AddPost, Button, DropDown, Loader, Modal, Pagination, PostFilter, PostList } from '../components';
import { getPageCount } from '../helpers/pagination';
import { usePosts } from '../hooks/usePosts';
import { IPostList } from '../interfaces/post.interface';
import { withLayout } from '../layout/Layout';

function Posts () {
    const [posts, setPosts] = useState<IPostList[]> (
        []
      )
      
      const [postFilter, setPostFilter] = useState ({sort: '', query: ''});
    
      const sortedAndSearchPosts = usePosts ({posts, postFilter});
    
      const [visibleModal, setVisibleModal] = useState<boolean> (false);
      
      const [isLoading, setIsLoading] = useState<boolean> (false);
      
      const [totalPages, setTotalPages] = useState (0);
      const [limit, setLimit] = useState<number> (10);
      const [page, setPage] = useState<number> (1);
      const lastElement = useRef (null);
      let observer = useRef<IntersectionObserver> ();
    
      //Подключение API постов
      const fetchPosts = async () => {
        setIsLoading (true);
        const objGetItems = await PostService.getAll (limit, page);
        objGetItems ? setPosts ([...posts, ...objGetItems.data]) : console.log ('error');
        const totalCount = Number (objGetItems?.headers);
        setTotalPages (getPageCount (totalCount, limit));
        setIsLoading (false);
      }

      useEffect (() => {
          fetchPosts ();
      }, [page, limit])
      //Подключение API постов

      // Динамическая пагинация
      // useEffect (() => {
      //   if (isLoading) return;
      //   if (observer.current) observer.current.disconnect ();
      //   let callback = function(entries:any, observer:any) {
      //       if (entries[0].isIntersecting && page < totalPages) {
      //         console.log (page);
      //         setPage (page + 1);
      //       }
            
      //   };
      //   observer.current = new IntersectionObserver(callback);
      //   lastElement.current ? observer.current.observe (lastElement.current) : console.log ('error');
      // }, [isLoading])
      // Динамическая пагинация

      const createPost = (newPost: IPostList) => {
        setPosts ([...posts, newPost]);
        setVisibleModal(false);
      };
    
      const removePost = (post: IPostList) => {
        setPosts (posts.filter (p => p.id !== post.id))
      };
    
      const changePage = (page: number) => {
        setPage (page)
      }
      
      return (
        <>
          <div>
            <h1>Новости</h1>
            <Button onClick={() => setVisibleModal (true)}>Создать пост</Button>

            <Modal visible={visibleModal} setVisible={setVisibleModal}>
              <AddPost create={createPost}/>
            </Modal>

            <PostFilter filter={postFilter} setFilter={setPostFilter}/>
            <DropDown 
                value={limit} 
                onSort={value => setLimit(Number(value))} 
                defaultValue='Кол-во показа элементов' 
                options={[
                  {value: '5', name: '5'}, 
                  {value: '10', name: '10'},
                  {value: '25', name: '25'},
                  {value: '-1', name: 'Показать все'},
                ]}
            />
            <PostList remove={removePost} items={sortedAndSearchPosts} />
            <div ref={lastElement} style={{height: 20, background: 'black'}}></div>
            {isLoading && 
              <Loader/>
            }
            <Pagination page={page} totalPages={totalPages} changePage={changePage} />
            
            
    
          </div>
        </>
      );
}

export default Posts;