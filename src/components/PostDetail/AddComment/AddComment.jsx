import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../../features/post/postSlice'

import '../../../styles/main.scss';

const AddComment = ({_id}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        setFormData((pre) => ({...pre, _id}) )
      }, []);

    const [formData, setFormData] = useState({
      _id: '',
      comment:''
    })
  
    const { comment } = formData
  
    const onChange = (e)=>{
      setFormData((prevState)=> ({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
      dispatch(addComment(formData))
    }

  return (
    <div className='order'>
    <h3>Añade un comentario</h3>
    <form onSubmit={onSubmit}>
        <input type="text" name="comment" value={comment} onChange={onChange}/>
            <button type="submit">Añade un comentario Crack</button>
    </form>
    </div>
  )
}

export default AddComment