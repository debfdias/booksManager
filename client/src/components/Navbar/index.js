import React from 'react';
import { NavLink } from 'react-router-dom'
import "./style.css";

function Navbar(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 sticky-top">
      <div className="container">
        <NavLink exact to="/" className="navbar-brand"><i className="fas fa-book-open"></i> Gerenciador de Leitura </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/Search" className="nav-link"><i className="fas fa-search"></i> Buscar</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Favorites" className="nav-link"> <i className="fas fa-bookmark"></i> Favoritos </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
