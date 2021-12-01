import React from 'react'
import {Link} from 'react-router-dom';
import UserTypeComp from './UserTypeComp';
import NavigationBar from './NavigationBar';
import WebLogoComp from './WebLogoComp';
import FooterComp from './FooterComp';

function HomePage() {
    return (
        <div className="homeContainer">
            <div className="col-10 homeMainGrid">
                <div className="navigation-bar">
                    <NavigationBar/>
                </div>
                <WebLogoComp/>
            </div>
            <div className="row userTypeComponent p-4">
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
