import React from "react";

export default function StatusJobNumber(props) {
    return(
        <div>
            <h4>jobs applied: {props.allJobs}</h4>
            <h4>interviewing: {props.interviewingNumber}</h4>
            <h4>pending/no reponse: {props.pendingNumber}</h4>
            <h4>jobs rejected:{props.rejectedNumber} </h4>
        </div>
    )
}