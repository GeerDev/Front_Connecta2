import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../../../../features/post/postSlice'

import 'antd/dist/antd.dark.css';
import '../../../../../styles/main.scss';

import { Modal } from 'antd';

const UIModal = ({visible, setVisible}) => {

   const dispatch = useDispatch()
   const { post } = useSelector( state => state.post )

   useEffect(() => {
    setFormData({...post})
   },[post])
 
   const handleOk = () => {
     dispatch(editPost(formData))
     setVisible(false)
   };
 
   const handleCancel = () => {
    setVisible(false)
   };

   const [formData, setFormData] = useState({
    title: '',
    description: ''
    })

    const { title, description } = formData

   const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
    }

  return (
    <Modal title="Editar Publicación" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <input type="text" name="title" value={title || ''} onChange={onChange}/>
        <input type="text" name="description" value={description || ''} onChange={onChange}/>
    </Modal>
  )
}

export default UIModal