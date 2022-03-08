import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from '../../features/post/postSlice';

import AddComment from "./AddComment/AddComment";

import '../../styles/main.scss';

const PostDetail = () => {

  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector( state => state.post )
  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  return (
    <>
    <div>{ post.title }</div>
    {
     post.comments && post.comments.map(post => (
        <div key = {crypto.randomUUID()}>
        <p>{ post.comment }</p>
        </div>
      ))
    }
    <AddComment _id = {_id}/>
    </>
  )
}

export default PostDetail