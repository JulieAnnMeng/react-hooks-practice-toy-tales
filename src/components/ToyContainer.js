import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy, likePatch}) {
  //pass down toy data, render toycards: name, image, likes
  const toyCard = toys.map(toy => {
    return (
      <ToyCard 
        key={toy.id}
        toy={toy}
        deleteToy={deleteToy}
        likePatch={likePatch}
      />
    )
  })
  return (
    <div id="toy-collection">{toyCard}</div>
  );
}

export default ToyContainer;
