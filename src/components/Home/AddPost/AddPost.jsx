import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../features/post/postSlice'

import './AddPost.css';

const AddPost = () => {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    title:'',
    description:''
  })

  const {title,description} = formData

  const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addPost(formData))
  }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="title" value={title} onChange={onChange}/>
        <input type="text" name="description" value={description} onChange={onChange}/>
    <button type="submit">Añade un Post Crack</button>
</form>
  )
}

export default AddPost