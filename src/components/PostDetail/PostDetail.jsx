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
console.log(post);
  return (
    <div className="postdetail">
      <div className="columnleft">
          <h2>Título: { post.title }</h2>
          <p>Descripción: { post.description }</p>

          <img
          src={`http://localhost:4000/images/posts/` + post.image}
          alt="Imagen Post"
          width={320}
          />

          <p>Post creado: { post.createdAt }</p> 

      </div>
      <div className="columnright">
            <div className="posts">
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