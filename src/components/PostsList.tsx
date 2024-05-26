import classes from './PostsList.module.css'
// import { useState, useEffect } from "react";
import { Post } from "./Post";
import { PostProps } from "./Post";
// import axios from 'axios';
import {useLoaderData} from 'react-router-dom';


export const PostsList = () =>{ 

    const posts = useLoaderData() as PostProps[];
    return(
    <>
        {posts.length > 0 && (
            <ul className={classes.posts}>
            {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body= {post.body}/>)}
            </ul>
        )}
        {posts.length === 0 && (
            <div style={{ textAlign:'center', color:'white' }}>
                <h2>There are no posts yet!</h2>
                <p>Start adding them</p>
            </div>
        )}
       

    </>
    );
}