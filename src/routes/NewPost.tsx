
import classes from './NewPost.module.css';
import { Modal } from '../components/Modal';
import {Link, Form, redirect } from 'react-router-dom';
import axios from 'axios';

export const NewPost = () =>{


    return(
        <Modal>
        <Form method='post' className={classes.form} >
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" name= 'body' required rows={3} ></textarea>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name= 'author' required />
            </p>
            <p className={classes.actions}>
                <Link to='/' type='button'>Cancel</Link>
                <button >Submit</button>
            </p>
        </Form>
        </Modal>
    );
};

export async function action({request}:any){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await axios.post('http://localhost:8080/posts',postData, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // Manipularea răspunsului primit de la server
              console.log(response.data);
            })
            .catch(error => {
              // Manipularea erorilor în cazul în care cererea a eșuat
              console.error(error);
            });
    return redirect('/');
}