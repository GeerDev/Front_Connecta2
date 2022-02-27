import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../features/post/postSlice'
import './Home.css';

const Home = () => {

  const dispatch = useDispatch()

  const posts = useSelector(state => state.post)

  const arrayPosts = posts.posts.posts || []

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])

  const paintPosts = arrayPosts.map((element) => {
    return (
      <div key = {element._id}>
          <h2>{element.title}</h2>
      </div>
    )
  })

  return (
    <div>{paintPosts}</div>
  )
}

export default Home