import { useMemo } from "react";
import { IPostList } from "../interfaces/post.interface";

interface SortedPostsProps {
  posts: IPostList[];
  sort: string;
}

interface UsePostsProps {
  posts: IPostList[];
  postFilter: { sort: string; query: string;};
}

export const useSortedPosts = ({posts, sort}: SortedPostsProps) => {
    // Отсортированный массив постов
  const sortedPosts = useMemo (() => {

    console.log ('ОТРАБОТАЛО');
    if (sort) {
      if (sort === 'title') {
      return [...posts].sort((a,b) => a.title.localeCompare(b.title))
    } else if (sort === 'body') {
      return [...posts].sort((a,b) => a.body.localeCompare(b.body))
    }
    
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
  // Отсортированный массив постов
}

export const usePosts = ({posts, postFilter}:UsePostsProps) => {
      const sort = postFilter.sort;
      const query = postFilter.query;
      const sortedPosts = useSortedPosts ({posts, sort});
      // Фильтрация и поиск по постам
      const sortedAndSearchPosts = useMemo (() => {
          return sortedPosts.filter (post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      }, [query, sortedPosts]);

      return sortedAndSearchPosts;
      // Фильтрация и поиск по постам
}