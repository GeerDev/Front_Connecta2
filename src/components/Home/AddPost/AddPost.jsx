import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../features/post/postSlice'

import '../../../styles/main.scss';

const AddPost = () => {

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.title.value);
    const formData = new FormData();
    if (e.target.imagePost.files[0]) formData.set('imagePost', e.target.imagePost.files[0]);
    formData.set('title', e.target.title.value)
    formData.set('description', e.target.description.value)
    dispatch(addPost(formData)) 
  }

  return (
    <form onSubmit={onSubmit} className='form card animate__animated animate__fadeIn'>
        <input type="file" name="imagePost"/>
        <input type="text" placeholder="Título..." name="title" />
        <input type="text" placeholder="Descripción..." name="description" />
    <button type="submit">Añade una publicación</button>
    </form>
  )
}

export default AddPost