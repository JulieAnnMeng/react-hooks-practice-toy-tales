import React, { useState } from "react";

function ToyForm({toyPost}) {
  const blankForm = {name: "", image: ""}
  const [formData, setFormData] = useState(blankForm)

  //pass in post function as props
  function handleSubmit(e){
    e.preventDefault();
    toyPost(formData);
    setFormData(blankForm);
  }

  function handleInputs(e){
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value});
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleInputs}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleInputs}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
