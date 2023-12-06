import React from "react";

export const Navbar = () => {
	return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary"data-bs-theme="dark">
    <div className="container">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Services</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
};
