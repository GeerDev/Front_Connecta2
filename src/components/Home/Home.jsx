import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts, deletePost } from '../../features/post/postSlice'

import AddPost from './AddPost/AddPost' 

import './Home.css';

const Home = () => {

  const dispatch = useDispatch()

  const posts = useSelector(state => state.post)

  const arrayPosts = posts.posts || []

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])

  const deletePostNow = ( _id ) => {
    dispatch(deletePost())
  }

  const paintPosts = arrayPosts.map((element) => {
    return (
      <div key = {element._id}>
          <h2>{element.title}</h2>
          <button onClick={() => deletePostNow(element._id)}>Borrame Crack</button>
      </div>
    )
  })

  return (
    <>
    <AddPost />
    <div>{paintPosts}</div>
    </>
  )
  
}

export default Home