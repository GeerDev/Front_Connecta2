import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoUser } from '../../features/user/userSlice'

import './Profile.css';

const Profile = () => {
  
  const dispatch = useDispatch()
  const { userNow } = useSelector( state => state.user )

  const { name, email} = userNow.user

  useEffect(() => {
    dispatch(getInfoUser())
  },[])

  return (
    <>
    <p>Hola {name}! Tu email es {email}</p>
    </>
    
  )
}

export default Profile