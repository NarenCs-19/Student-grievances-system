import React from 'react';
//import CegLogo from '../Images/CegLogo.png';
import '../Css/NavigationBar.css';

function NavigationBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-4">
        
        <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <a className="navbar-brand" href="#">
          <img src={CegLogo} alt="CegLogo"></img>
        </a> */}
        <div className="collapse navbar-collapse nav-items " id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase fw-bold">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/aboutUs">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/FAQ">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contactUs">Contact us</a>
            </li>
          </ul>
        </div>
        
      </nav>
    </div>
  )
}

export default NavigationBar
