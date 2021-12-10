import React, { useState } from 'react'
import "./acoeComp.css";
import AcoeSectionComp from './AcoeSectionComp';
import AcoePendingApprovals from './AcoePendingApprovals';

function AcoeComp() {
    const [compID,setcompID] = useState(1);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="side-nav col-1 m-0 p-0">
                <AcoeSectionComp/>
                </div>
                <div className="mainComp col">
                    {compID === 1 && <AcoePendingApprovals/>}
                </div>
            </div>
        </div>
    )
}

export default AcoeComp
