import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useState } from "react";
import avatar from "./assets/avatar.svg";

function AcoeSectionComp(props) {
  
  
  return (
    <div className="sidenav row d-flex flex-column m-0 p-0">
      <div className="profile-container col-12 mt-3 px-0">
        <div className="profile-pic text-center">
        <img src={avatar} alt="avatar" />
        </div>
        <div className="profile-details">
          <div className="profile-name">
            Brats
          </div>
          <div className="profile-job">Student</div>
        </div>
        <div className="menu-icon" onClick={props.menuHandler}>
          <box-icon name="menu"></box-icon>
        </div>
      </div>
      <div className="navItems col-12 p-0">
          <ul className="text-uppercase fw-bold row">
            <li className="nav-item col-12 d-flex align-items-center">
              <div className="navItem-icon"><DashboardIcon /></div>
              <div className="nav-link-text">
              <a
                className="nav-link active"
                aria-current="page"
                href="/acoe/Dashboard"
              >
                Dashboard 
              </a>
              </div>
            </li>
            <li className="nav-item col-12  d-flex align-items-center">
            <div className="navItem-icon"><PendingActionsIcon /></div>
              <div className="nav-link-text">
              <a
                className="nav-link active"
                aria-current="page"
                href="/acoe/Dashboard"
              >
               Approvals 
              </a>
              </div>
            </li>
            <li className="nav-item col-12  d-flex align-items-center">
            <div className="navItem-icon"><QuestionMarkIcon/></div>
              <div className="nav-link-text">
              <a
                className="nav-link active"
                aria-current="page"
                href="/acoe/Dashboard"
              >
                FAQs
              </a>
              </div>
            </li>
            <li className="nav-item col-12  d-flex align-items-center">
            <div className="navItem-icon"><PowerSettingsNewIcon /></div>
              <div className="nav-link-text">
              <a
                className="nav-link active"
                aria-current="page"
                href="/acoe/Dashboard"
              >
                Logout
              </a>
              </div>
            </li>
          </ul>
      </div>      
    </div>
  );
}

export default AcoeSectionComp;
