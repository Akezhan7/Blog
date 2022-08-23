export interface IPostList {
    userId: string;
    id: string;
    title: string;
    body: string; 
    image?: string;
}

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

// export interface ApiPostList {
//     userId: string;
//     id: string;
//     title: string;
//     body: string; 
//     image: string;
// }