import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { deletePost, getById, like, dislike } from '../../../../features/post/postSlice'
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

import './Post.css';
import UIModal from './UIModal/UIModal';

const Post = ({_id, title, description, likes}) => {

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (_id) => {
    dispatch(getById(_id))
    setIsModalVisible(true);
   };

  const deletePostNow = (_id) => {
    dispatch(deletePost(_id))
  }

  const isAlreadyLiked = likes?.includes(user?.user._id);

  return (
    <div key = {_id} className='post'>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/main/postdetail/${_id}`}>
          <p>Go To Post Detail</p>
        </Link>
        <div>
        <span>Likes: {likes?.length}</span>
        {isAlreadyLiked ? (
          <HeartFilled  onClick={  isAlreadyLiked  ? () => dispatch(dislike(_id))  : () => dispatch(like(_id))  } />
        ) : (
          <HeartOutlined onClick={  isAlreadyLiked  ? () => dispatch(dislike(_id))   : () => dispatch(like(_id))  } />
        )}
        </div>
        <button onClick={() => deletePostNow(_id)}>Borrame Crack</button>
        <button onClick={() => showModal(_id)}>Open Modal</button>
        <UIModal visible = {isModalVisible} setVisible = {setIsModalVisible}/>
    </div>
  )
}

export default Post