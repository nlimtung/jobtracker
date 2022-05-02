import React from "react";
import './JobIndexItem.css'
import Button from 'react-bootstrap/Button';

export default function JobIndexItem(props) {
    const sortedJobs = props.allJobs.sort((a,b)=>{
        var c = new Date(a.dateApplied);
        var d = new Date(b.dateApplied)
        return d-c
    })


    return(
        <div className="JobIndexItem">
            {sortedJobs.map((j)=>(
                <div className="indexItem" key = {j._id}>
                    <div>
                        <h5>Date Applied: {new Date(j.dateApplied).toDateString()}</h5>
                        <h2>{j.company}</h2>

                        <a href = {j.postLink}>
                        <Button
                            size="sm"
                            type = "submit"
                            variant="outline-dark"
                            >Job Posting Link
                        </Button>
                        </a>                        
                    </div>


                    <div className="status">
                        
                        <h5>Status: <span>{j.status}</span></h5>


      
                        <form onSubmit={(e) => props.handleChangeStatusButton(e)}>
                            <select
                                name = {props.status}
                                id = {j._id}
                                onChange= {props.handleChangeStatus}
                            >
                                <option></option>
                                <option value = "Interview">Interview</option>
                                <option value = "Rejected">Rejected</option>

                            </select>
                            <br></br>
                            <Button
                                size="sm"
                                type = "submit"
                                variant="outline-dark"
                                >Update status
                            </Button>

                        </form>


                        {j.favourite === false ? 

                            <div
                                id = {j._id}
                                className="bi bi-heart"
                                onClick = {props.handleFavourite}
                            />:
                            <div
                                id = {j._id}
                                className="bi bi-heart-fill"
                                onClick = {props.handleFavourite}
                            />

}
                    </div>


                </div>
                
            ))}

        </div>
    )
}