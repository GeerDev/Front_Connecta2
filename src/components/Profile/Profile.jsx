import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoUser, resetUser } from '../../features/user/userSlice'

import './Profile.css';

const Profile = () => {
  
  const dispatch = useDispatch()
  const { userNow } = useSelector( state => state.user )

  const { name, email, postsIds} = userNow.user || []

  useEffect(() => {
    dispatch(getInfoUser())

    return () => dispatch(resetUser())
  },[])

  // const onChange = (e)=>{
  //   setFormData((prevState)=> ({
  //       ...prevState,
  //       [e.target.name]:e.target.value,
  //   }))
  // }

  return (
    <>
    {/* <input type="text" name="search" value={'Search...'} onChange={onChange}/> */}
    <p>Hola {name}! Tu email es {email}</p>
    {
     postsIds && postsIds.map(post => (
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