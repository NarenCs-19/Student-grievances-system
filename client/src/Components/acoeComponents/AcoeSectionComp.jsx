import React from 'react'

function AcoeSectionComp(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-4">
            <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <a className="navbar-brand" href="#">
            <img src={CegLogo} alt="CegLogo"></img>
            </a> */}
            <div className="collapse navbar-collapse nav-items " id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase fw-bold row">
                    <li className="nav-item col-12">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item col-12">
                        <a className="nav-link text-white" href="#">About us</a>
                    </li>
                    <li className="nav-item col-12">
                        <a className="nav-link text-white" href="#">FAQ</a>
                    </li>
                    <li className="nav-item col-12">
                        <a className="nav-link text-white" href="#">Contact us</a>
                    </li>
                </ul>
            </div> 
        </nav>
    )
}

export default AcoeSectionComp