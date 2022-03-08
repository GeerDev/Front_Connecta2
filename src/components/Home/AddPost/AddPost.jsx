import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../features/post/postSlice'

import '../../../styles/main.scss';

const AddPost = () => {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    title:'',
    description:'',
    imagePost: ''
  })

  const { title , description } = formData

  const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) => {
    console.log(e.target.imagePost.files[0]);
    e.preventDefault()
    console.log(formData)
    dispatch(addPost(formData)) 
  }

  return (
    <form onSubmit={onSubmit}>
        <input type="file" name="imagePost" onChange={onChange}/>
        <input type="text" name="title" value={title} onChange={onChange}/>
        <input type="text" name="description" value={description} onChange={onChange}/>
    <button type="submit">Añade una publicación</button>
    </form>
  )
}

export default AddPost