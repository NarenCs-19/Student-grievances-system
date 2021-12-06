import React from 'react'
import "./acoeComp.css";
import AcoeSectionComp from './AcoeSectionComp';
function AcoeDashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 bg-primary">
                    <AcoeSectionComp sectionName="Dashboard" flag="1"/>
                    <AcoeSectionComp sectionName="Pending Approvals"/>
                    <AcoeSectionComp sectionName="fgghf"/>
                    <AcoeSectionComp sectionName="jhfdgv"/>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    )
}

export default AcoeDashboard
