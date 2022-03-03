import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoUser } from '../../features/user/userSlice'

import './Profile.css';

const Profile = () => {
  
  const dispatch = useDispatch()
  const { userNow } = useSelector( state => state.user )

  const { name, email, postsIds} = userNow.user || []

  useEffect(() => {
    dispatch(getInfoUser())
  },[])

  return (
    <>
    <p>Hola {name}! Tu email es {email}</p>
    {
      postsIds.map(post => (
        <div>
        <h3>{ post.title }</h3>
        <p>{ post.description }</p>
        </div>
      ))
    }
    </>
    
  )
}

export default Profile