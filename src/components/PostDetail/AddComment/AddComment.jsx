import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../../features/post/postSlice'

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
    <>
    <h2>Añade un comentario</h2>
    <form onSubmit={onSubmit}>
        <input type="text" name="comment" value={comment} onChange={onChange}/>
            <button type="submit">Añade un comentario Crack</button>
    </form>
    </>
  )
}

export default AddComment