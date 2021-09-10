import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [update, setUpdate] = useState(false)

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  //useEffect fetch /toys pass down toys to toyconatiner
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then(data=> setToys(data))
  }, [update])

  //post function from toy form, re-render
  function toyPost(formData){
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    })
    setUpdate(!update)
    setShowForm((showForm) => !showForm)
  }

  //delete request from toy card, re-render
  function deleteToy(toy){
    console.log(toy);
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    setUpdate(!update)
  }

  //patch request from toy card, like button, update like state
  function likePatch(like, toy) {
    console.log("This is in App", like, toy)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json",
    },
    body: JSON.stringify({likes: like}),
    })
    setUpdate(!update)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toyPost={toyPost} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} likePatch={likePatch} />
    </>
  );
}

export default App;
