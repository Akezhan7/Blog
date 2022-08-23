import axios from "axios";
import { IPostList } from "../interfaces/post.interface";

interface ResponsePostsProps {
    data: IPostList[];
    headers: {};
    img: string;
}

export default class PostService {
    static async getAll (limit: number = 10, page: number = 1) {
        try {
            const response = await axios.get ('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            const getImg = await axios.get('https://picsum.photos/200/300?random');
            const objGetItems:ResponsePostsProps = {
                data: response.data,
                headers: response.headers['x-total-count'],
                img: getImg.request.responseURL
            }
            return objGetItems;
        }
        catch (e) {
            console.log (e)
        }
    }

    static async getById (id: string | undefined) {
        try {
            if (id) {
                const response = await axios.get ('https://jsonplaceholder.typicode.com/posts/' + id);
                return response;
            }
        }
        catch (e) {
            console.log (e)
        }
    }
    static async getComments (id: string | undefined) {
        try {
            if (id) {
                const response = await axios.get (`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
                return response;
            }
        }
        catch (e) {
            console.log (e)
        }
    }
}