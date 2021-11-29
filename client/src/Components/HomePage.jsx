import React from 'react'
import UserTypeComp from './UserTypeComp';
// import {Row} from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import WebLogoComp from './WebLogoComp';
import FooterComp from './FooterComp';

function HomePage() {
    return (
        <div className="homeContainer">
            <div className="homeMainGrid">
                <div className="navigation-bar">
                    <NavigationBar/>
                </div>
                <WebLogoComp/>
            </div>
            <div className="userTypeComponent d-flex justify-content-center">
                <UserTypeComp type="ACOE"/>
                <UserTypeComp type="DCOE"/>
                <UserTypeComp type="HOD"/>
                <UserTypeComp type="STUDENT"/>
            </div>
            <div className="footerComp">
                <FooterComp/>
            </div>
        </div>
    );
}

export default HomePage;
