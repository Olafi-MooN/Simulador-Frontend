import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props: any) => {
  const location = useLocation();
  
  return <>
    { location.pathname !== "/" && <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand navbar-title" to="/home"> <img src="/img/logo.png" className='img-fluid logo' width={120}></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link select-color" to="home">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Estatísticas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Sobre</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <div className="nav-item d-flex">
              <img className="img-fluid" src="img/profile.jpg" alt="" id="profile-mini" />
              <li className="nav-item dropdown dropdown-menu-end dropdown-menu-lg-start">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Yasmin S.
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                  aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><Link className="dropdown-item" to="profile/edit">Perfil</Link></li>
                  <li><Link className="dropdown-item log-out" to="/">Sair</Link>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      {props.children}
    </div>
    </React.Fragment>}
  </>

}

export { Navbar };