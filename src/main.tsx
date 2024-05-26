import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { NewPost, action as newPostAction} from './routes/NewPost.tsx'
import { RootLayout } from './routes/RootLayout.tsx'
import Posts, {loader as postLoader }  from './routes/Posts.tsx'
import PostDetails, {loader as PostDetailsLoader} from './components/PostDetails.tsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout/>, 
    children: [
      {
        path:'/', 
        element: <Posts/>, 
        loader:postLoader,
        children:[
          {path:'/create-post', element: <NewPost/>, action:newPostAction},
          {path:'/:id', element: <PostDetails/>, loader:PostDetailsLoader}
        ]
    },// our domain/
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
