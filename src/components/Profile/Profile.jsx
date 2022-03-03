import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoUser, searchByName, resetUser } from '../../features/user/userSlice'

import './Profile.css';

const Profile = () => {
  
  const dispatch = useDispatch()
  const { userNow, userSearch } = useSelector( state => state.user )

  const { name, email, postsIds} = userNow.user || []

  const [searchHook, setSearchHook] = useState({
      search : ''
  })

  const { search } = searchHook
  console.log("Busqueda:", search);

  useEffect(() => {
    dispatch(getInfoUser())

    return () => dispatch(resetUser())
  },[])

  useEffect( () => {
    if (search.length > 0){
      dispatch(searchByName(search))
    } 
  }, [search]);
    
  console.log("Estado:", userSearch);

  const onChange = (e)=>{
    setSearchHook((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  }

  return (
    <>
    <input type="text" name="search" value={search} onChange={onChange}/>
    <p>Hola {name}! Tu email es {email}</p>
    {
     postsIds && postsIds.map(post => (
        <div>
        <h3>{ post.title }</h3>
        <p>{ post.description }</p>
        </div>
      ))
    }
                        {
                        (search === '')
                            ? <div> Buscar un usuario </div>
                            : (userSearch.length === 0) && <div> No hay resultados: { search } </div>
                        }
                        {
                          userSearch.map(user => (
                            <div>
                                <h3>{ user.name }</h3>
                                <p>{ user.email }</p>
                            </div>
                          ))
                        }
    </>
    
  )
}

export default Profile