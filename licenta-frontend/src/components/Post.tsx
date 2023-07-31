import classes from "./Post.module.css";
import {Link} from 'react-router-dom';
//import clasele
//css modules in react ca sa ia clasa cum trebuie

export interface PostProps {
    id?:number,
    author: string;
    body: string;
  }

export const Post = (props: PostProps) =>{
    
    if(!props.id){
        return(
            <div>
                N-avem!
            </div>
        )
    }
    return(
        <li className={classes.post}>
        <Link to={props.id.toString()}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </Link>
        </li>
    );
}