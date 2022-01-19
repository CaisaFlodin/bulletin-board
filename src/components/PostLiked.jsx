import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
const PostLiked = ({ likeBtnHandler }) => {
  return (
    <span>
      <BsSuitHeartFill className="liked-icon" onClick={likeBtnHandler} />
      You have liked this post!
    </span>
  );
};

export default PostLiked;
