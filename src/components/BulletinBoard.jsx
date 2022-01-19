import ReactPost from "./ReactPost";
import React from "react";

const BulletinBoard = ({ list }) => {
  return (
    // <ul className="board">
    //   {list.map((obj, i) => (
    //     <ReactPost {...obj} key={i} />
    //   ))}
    // </ul>
    <div className="board">
      {list.map((obj, i) => (
        <ReactPost key={i} {...obj} />
      ))}
    </div>
  );
};
export default BulletinBoard;
