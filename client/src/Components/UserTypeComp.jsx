import React from 'react';
import '../Css/UserTypeComp.css';
  
function UserTypeComp(props) {
    return (
      <div className="col-2 userTypeBlock">
          <div className="w-100 img-container">
            
          </div>
          <div className="w-100 userType text-center">
            <span>{props.type}</span>
          </div>
      </div>
    )
}

export default UserTypeComp
