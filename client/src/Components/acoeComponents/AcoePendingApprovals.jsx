import React from 'react'
import "./acoeComp.css";
import AcoeSectionComp from './AcoeSectionComp';

function AcoePendingApprovals() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-2  bg-primary">
                    <AcoeSectionComp sectionName="Dashboard" />
                </div>
                <div className="col-12 col-md">
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default AcoePendingApprovals
