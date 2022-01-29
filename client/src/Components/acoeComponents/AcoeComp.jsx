import React, { useState } from 'react'
import "./acoeComp.css";
import AcoeSectionComp from './AcoeSectionComp';
import AcoePendingApprovals from './AcoePendingApprovals';

function AcoeComp() {
    const [compID,setcompID] = useState(1);
    const [showMenu,setshowMenu] = useState(1);

    const handleShowMenu = ()=>{
        console.log(showMenu);
        setshowMenu(showMenu+1)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="side-nav m-0 p-0"  id={showMenu%2==0?"close":null}>
                <AcoeSectionComp menuHandler={handleShowMenu}/>
                </div>
                <div className="mainComp">
                    {/* {compID === 1 && <AcoePendingApprovals/>} */}
                </div>
            </div>
        </div>
    )
}

export default AcoeComp
