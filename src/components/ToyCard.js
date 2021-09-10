import React from "react";

function ToyCard({toy, deleteToy, likePatch}) {
  const {name, image, likes} = toy;

  function handleDelete(e, toy){
    e.preventDefault();
    deleteToy(toy);
  }
  function handleLike(e, toy){
    e.preventDefault();
    let like = toy.likes ? toy.likes + 1 : 1;
    likePatch(like, toy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={(e) => handleLike(e,toy)}>Like {"<3"}</button>
      <button className="del-btn" onClick={(e) => handleDelete(e, toy)} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
