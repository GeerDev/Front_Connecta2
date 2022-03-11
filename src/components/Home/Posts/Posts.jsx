import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../features/post/postSlice'

import Post from './Post/Post'

import '../../../styles/main.scss';

const Posts = () => {

  const dispatch = useDispatch()
  const { posts } = useSelector( state => state.post )

  const arrayPosts = posts || []

  useEffect(() => {
    dispatch(getPosts())
  },[])

  return (
    <>
    <h2 className='title card animate__animated animate__fadeIn'>Publicaciones</h2>
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
    </>
  )
}

export default Posts