import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../features/post/postSlice'

import Post from './Post/Post'

import './Posts.css';

const Posts = () => {

  const dispatch = useDispatch()
  const { posts } = useSelector( state => state.post )

  const arrayPosts = posts || []

  useEffect(() => {
    dispatch(getPosts())
  },[])

  return (
    <div className='posts'>
    {
      arrayPosts.map(post => (
        <Post 
            key= { post._id } 
            {...post}
            />
      ))
    }
    </div>
  )
}

export default Posts