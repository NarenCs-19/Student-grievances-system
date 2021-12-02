import React from 'react';
import '../Css/WebLogoComp.css';

function WebLogoComp() {
    return (
        <div className="row webLogoContainer h-75">
            <div className="col-12 col-md-6 webLogoTypography px-4 ">
                <h1 >Students Grievances Redressal System</h1>
                <button className="btn text-white">Goto</button>
            </div>
            <div className="col-12 col-md-6 webLogo"></div>
        </div>
    )
}

export default WebLogoComp
