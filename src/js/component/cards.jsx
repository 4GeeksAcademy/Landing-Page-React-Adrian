import React from "react";

export const Cards = () => {
  return (
    <div className="card m-3 col-3" style={{ width: "18rem" }}>
      <img
        src="https://placehold.co/500x325"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body ">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text ">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary d-flex justify-content-center col-12">
          Find out More!
        </a>
      </div>
    </div>
  );
};
