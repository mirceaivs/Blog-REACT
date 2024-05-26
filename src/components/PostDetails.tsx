import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import {Modal} from './Modal';
import classes from './PostDetails.module.css';
import { PostProps } from './Post';

function PostDetails() {
  const post = useLoaderData() as PostProps;

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export const loader = async({params}:any ) => {
    const response = await axios.get('http://localhost:8080/posts/'+ params.id);
    const resData = await response.data;
    return resData.post;
}