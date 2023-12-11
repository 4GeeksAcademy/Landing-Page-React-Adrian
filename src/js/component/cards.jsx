import React from "react";

export const Cards = () => {
  return (
    <div className="card m-3 " style={{ width: "18rem" }}>
      <img
        src="https://placehold.co/500x325"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary align-self-center">
          Find out More!
        </a>
      </div>
    </div>
  );
};
