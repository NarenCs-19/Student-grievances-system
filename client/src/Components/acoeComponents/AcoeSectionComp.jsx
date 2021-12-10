import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

function AcoeSectionComp(props) {
  return (
    <div className="sidenav row d-flex m-0 p-0">
      <div className="navItems col-12 p-0">
        <div className="nav-items-icons row col-12">
          <ul className="navbar-nav text-uppercase fw-bold row">
            <li className="nav-item col-12 d-flex align-items-center py-4">
              <DashboardIcon />
            </li>
            <li className="nav-item col-12  d-flex align-items-center py-4">
              <PendingActionsIcon />
            </li>
            <li className="nav-item col-12  d-flex align-items-center py-4">
              <QuestionMarkIcon />
            </li>
            <li className="nav-item col-12  d-flex align-items-center py-4">
              <PowerSettingsNewIcon />
            </li>
          </ul>
        </div>
        <div className="nav-items-names">
          <ul className="text-uppercase fw-bold row">
            <li className="nav-item col-12 d-flex align-items-center py-4">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/acoe/Dashboard"
              >
                Dashboard 
              </a>
            </li>
            <li className="nav-item col-12  d-flex align-items-center py-4">
              <a className="nav-link text-white" href="/acoe/PendingApprovals">
                Pending approvals
              </a>
            </li>
            <li className="nav-item col-12  d-flex align-items-center py-4">
              <a className="nav-link text-white" href="/acoe/FAQ">
                FAQ
              </a>
            </li>
            <li className="nav-item col-12  d-flex align-items-center py-4">
              <a className="nav-link text-white" href="/acoe/Logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default AcoeSectionComp;
