import React, { ReactNode } from "react";
import { JsxElement } from "typescript";
import About from "../pages/About";
import Index from "../pages/Index";
import Login from "../pages/Login";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export interface PrivateRoutesProps {
    path: string;
    element: () => JSX.Element;
}

export const privateRoutes:PrivateRoutesProps[] = [
    {path: '/', element: Index},
    {path: '/posts', element: Posts},
    {path: '/about', element: About},
    {path: '/posts/:id', element: PostPage},
]
export const publicRoutes:PrivateRoutesProps[] = [
    {path: '/login', element: Login},
]