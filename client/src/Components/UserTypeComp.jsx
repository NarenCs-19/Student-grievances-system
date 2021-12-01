import React from 'react';
import {Link} from 'react-router-dom';
import '../Css/UserTypeComp.css';
  
function UserTypeComp(props) {
    return (
      <Link to="/login" className="col-8 col-sm-4 col-md-3 col-lg-2 userTypeBlock p-0">
          <div className="w-100 img-container">
            
          </div>
          <div className="w-100 userType text-center">
            <span>{props.type}</span>
          </div>
      </Link>
    )
}

export default UserTypeComp
