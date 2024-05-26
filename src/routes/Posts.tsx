import {PostsList} from "../components/PostsList";
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { PostProps } from "../components/Post";

function Posts() {
  return (
  <>
  <Outlet/>
  <main>
    <PostsList/>
  </main>
  </>
  );
}

export default Posts

export async function loader():Promise<PostProps>{
  const response = await axios.get('http://localhost:8080/posts');
  const resData = await response.data;
  return resData.posts;
}