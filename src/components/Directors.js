import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <ul key={index}>
          <li>Name: {director.name}</li>
          <li>Name: {director.movies}</li>
        </ul>
      ))}
    </div>
  );
}

export default Directors;
