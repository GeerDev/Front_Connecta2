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
    <div className="postdetail">
      <div className="columnleft card animate__animated animate__fadeIn">
          <img
          src={`http://localhost:4000/images/posts/` + post.image}
          alt="Imagen Post"
          width={320}
          />
          {
            post.likes && <h4>Likes: { post.likes.length }</h4>
          }
          <h2>{ post.title }</h2>
          <p>{ post.description }</p>
          <p>Post creado: { post.createdAt }</p>
      </div>
      <div className="columnright card animate__animated animate__fadeIn">
            <div className="posts2">
            {
            post.comments && post.comments.map(post => (
                <div key = {crypto.randomUUID()}>
                <p>{ post.comment }</p>
                </div>
              ))
            }
            </div>
            <div className="addComment">
             <AddComment _id = {_id}/>
            </div>
      </div>
    


    </div>
  )
}

export default PostDetail