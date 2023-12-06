import React from "react";

export const Jumbotron = () => {
  return (
    <div className="container p-5 mb-4 bg-light rounded-3 col-12">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">React Landing</h1>
        <p className="col-12 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary " type="button">
          Example button
        </button>
      </div>
    </div>
  );
};
