import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, getById } from '../../../../features/post/postSlice'

import './Post.css';
import UIModal from './UIModal/UIModal';

const Post = ({_id, title, description}) => {

  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (_id) => {
    dispatch(getById(_id))
    setIsModalVisible(true);
   };

  const deletePostNow = (_id) => {
    dispatch(deletePost(_id))
  }

  return (
    <div key = {_id}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => deletePostNow(_id)}>Borrame Crack</button>
        <button onClick={() => showModal(_id)}>Open Modal</button>
        <UIModal visible = {isModalVisible} setVisible = {setIsModalVisible}/>
    </div>
  )
}

export default Post