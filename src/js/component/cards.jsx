import React from "react";

export const Cards = () => {
  return (
    <div className="card m-3 " style={{ width: "18rem" }}>
      <img
        src="https://loremflickr.com/320/240"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">Photos Random</h5>
        <p className="card-text">
          nose que foto te saldra...
          Suerte ejej
        </p>
        <a href="#" className="btn btn-primary align-self-center">
          Find out More!
        </a>
      </div>
    </div>
  );
};
