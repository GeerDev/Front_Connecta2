import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoUser, searchByName, resetUser, resetSearch } from '../../features/user/userSlice'
import '../../styles/main.scss';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Profile = () => {
  
  const dispatch = useDispatch()
  const { userNow, userSearch } = useSelector( state => state.user )
  const { name, email, postsIds, image, followers, followings, favorites} = userNow.user || []

  const [searchHook, setSearchHook] = useState({
      search : ''
  })

  const { search } = searchHook

  useEffect(() => {
    dispatch(getInfoUser())

    return () => dispatch(resetUser())
  },[])

  useEffect( () => {
    if (search.length > 0){
      dispatch(searchByName(search))
    }
    if (search.length === 0){
      dispatch(resetSearch())
    }
  }, [search]);

  const onChange = (e)=>{
    setSearchHook((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  }

  return (
    <div className='profile'>
      <div className="profile_user card animate__animated animate__fadeIn">
        <div className="profile_user-all">
            <div className="profile_user-image">
                <img src={`http://localhost:4000/images/users/` + image } alt="Imagen Usuario Conectado"/>
                <p>Hola <strong>{name}</strong>! Tu email es <em>{email}</em></p>
            </div>
            {/* <div className="profile_user-followers">
              <button className='followbutton'>Seguir</button>
                <h3>Seguidores: </h3>
                {followers && <p>{ followers.length }</p>}
                <h3>Seguidos: </h3>
                {followings && <p>{ followings.length }</p>}
            </div> */}
        </div>
              <Tabs defaultActiveKey="1">
                  <TabPane tab="Tus publicaciones" key="1">
                    <div className="tabs">
                    {
                        postsIds && postsIds.map(post => (
                            <div key = {post._id} className='inside card animate__animated animate__fadeIn'>
                              <div className="imageandtext">
                                    <img
                                    src={`http://localhost:4000/images/posts/` + post.image}
                                    alt="Imagen Post"
                                    width={320}
                                    />
                                    <div>
                                        <h3>{ post.title }</h3>
                                        <p>{ post.description }</p>
                                    </div>
                              </div>
                              <div className='likesandcomments'>
                                <h4> Likes: { post.likes.length }</h4>
                                <h4> Comentarios: { post.comments.length }</h4>
                              </div>
                            </div>
                          ))
                        }
                    </div>
                  </TabPane>
                  <TabPane tab="Tus favoritos" key="2">
                  <div className="tabs">
                    {
                        favorites && favorites.map(post => (
                            <div key = {post._id} className='inside card animate__animated animate__fadeIn'>
                              <div className="imageandtext">
                                    <img
                                    src={`http://localhost:4000/images/posts/` + post.image}
                                    alt="Imagen Post"
                                    width={320}
                                    />
                                    <div>
                                        <h3>{ post.title }</h3>
                                        <p>{ post.description }</p>
                                    </div>
                              </div>
                              <div className='likesandcomments'>
                                <h4> Likes: { post.likes.length }</h4>
                                <h4> Comentarios: { post.comments.length }</h4>
                              </div>
                            </div>
                          ))
                        }
                    </div>
                  </TabPane>
              </Tabs>
      </div>
      <div className="profile_search card animate__animated animate__fadeIn">
              <input type="text" name="search" value={search} onChange={onChange} placeholder='Busqueda...'/>
                                {
                                (search === '')
                                    ? <div> Buscar un usuario </div>
                                    : (userSearch.length === 0) && <div> No hay resultados para: { search } </div>
                                }
                                <div className="centrateporDIOS">
                                {
                                  userSearch && userSearch.map(user => (
                                    <div key = {user._id} className='element_search card animate__animated animate__fadeIn'>
                                        { user.image && <img src={`http://localhost:4000/images/users/` + user.image } alt="Imagen Usuario Buscado" width={320}/>}
                                        <h3>{ user.name }</h3>
                                        <p>{ user.email }</p>
                                    </div>
                                  ))
                                }
                                </div>

            </div>
    </div>

  )
}

export default Profile