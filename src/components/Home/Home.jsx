import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { getPosts, deletePost, addPost, getById } from '../../features/post/postSlice'

import AddPost from './AddPost/AddPost' 

import 'antd/dist/antd.css';
import './Home.css';

const Home = () => {

  const dispatch = useDispatch()
  const { posts, post } = useSelector( state => state.post )

  const arrayPosts = posts || []

  const [formData, setFormData] = useState({
    title: 'hola',
    description: 'hola'
  })

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getPosts())
  },[])

  const deletePostNow = (_id) => {
    dispatch(deletePost(_id))
  }

  const showModal = (_id) => {
   dispatch(getById(_id))
   setIsModalVisible(true);
  };

  const handleOk = () => {
    dispatch(addPost(formData))
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  }
  
  const paintPosts = arrayPosts.map((element) => {
    return (
      <div key = {element._id}>
          <h2>{element.title}</h2>
          <p>{element.description}</p>
          <button onClick={() => deletePostNow(element._id)}>Borrame Crack</button>
          <button onClick={() => showModal(element._id)}>Open Modal</button>
      <Modal title="Editar Publicación" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <input type="text" name="title" value={post.title || ""} onChange={onChange}/>
          <input type="text" name="description" value={formData.description || ""} onChange={onChange}/>
      </Modal>
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