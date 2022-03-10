import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePost,
  getById,
  like,
  dislike,
} from "../../../../features/post/postSlice";
import { HeartOutlined, HeartFilled, CommentOutlined } from "@ant-design/icons";

import "../../../../styles/main.scss";
import UIModal from "./UIModal/UIModal";

const Post = ({ _id, comments, likes, image, title }) => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (_id) => {
    dispatch(getById(_id));
    setIsModalVisible(true);
  };

  const deletePostNow = (_id) => {
    dispatch(deletePost(_id));
  };

  const isAlreadyLiked = likes?.includes(user?.user._id);

  return (
    <div key={_id} className="post contenedor">
     
        <img
          src={`http://localhost:4000/images/posts/` + image}
          alt="Imagen Post"
          width={320}
        />
     
      <div className="hover texto-encima">
        <div className="icons">
          <div className="comments">
            <CommentOutlined style={{ fontSize: "20px" }} />
            <span>{comments?.length}</span>
          </div>
          <div className="likes">
            {isAlreadyLiked ? (
              <HeartFilled
                style={{ fontSize: "20px", color: "#FF0000" }}
                onClick={
                  isAlreadyLiked
                    ? () => dispatch(dislike(_id))
                    : () => dispatch(like(_id))
                }
              />
            ) : (
              <HeartOutlined
                style={{ fontSize: "20px" }}
                onClick={
                  isAlreadyLiked
                    ? () => dispatch(dislike(_id))
                    : () => dispatch(like(_id))
                }
              />
            )}
            <span>{likes?.length}</span>
          </div>
        </div>
        <Link to={`/main/postdetail/${_id}`}>
        <h3>{title}</h3>
        </Link>
        <div className="buttons">
          <button onClick={() => deletePostNow(_id)}>Borra</button>
          <button onClick={() => showModal(_id)}>Edita</button>
        </div>
      </div>

      <UIModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
};

export default Post;
