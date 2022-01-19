import PostLiked from "./PostLiked";
import React from "react";
import { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";

const ReactPost = ({ question, answer }) => {
  console.log(question, answer);
  const [isLiking, setIsLiking] = useState(false);

  let likeBtnHandler = () => {
    setIsLiking(!isLiking);
  };

  return (
    <ul className="note">
      <span className="like-container">
        {!isLiking ? (
          <BsSuitHeart className="like-icon" onClick={likeBtnHandler} />
        ) : (
          <PostLiked likeBtnHandler={likeBtnHandler} />
        )}
      </span>
      <h1>{question}</h1>
      {answer.map((item, i) => (
        <li key={i}> {item}</li>
      ))}
    </ul>
  );
};

export default ReactPost;
