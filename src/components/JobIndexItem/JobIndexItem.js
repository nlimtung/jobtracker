import React from "react";
import './JobIndexItem.css'
import Button from 'react-bootstrap/Button';

export default function JobIndexItem(props) {


    return(
        <div className="JobIndexItem">
            {props.allJobs.map((j)=>(
                <div className="indexItem" key = {j._id}>
                    <div>
                        <h5>Date Applied: {new Date(j.dateApplied).toDateString()}</h5>
                        <h2>{j.company}</h2>
                        <h4>Link: {j.postLink}</h4>
                        
                    </div>


                    <div className="status">
                        
                        <h5>Status: {j.status}</h5>


      
                        <form onSubmit={(e) => props.handleChangeStatusButton(e)}>
                            <select
                                name = {props.status}
                                id = {j._id}
                                onChange= {props.handleChangeStatus}
                            >
                                <option></option>

                                <option value = "Pending/No Response">Pending</option>
                                <option value = "Interview">Interview</option>
                                <option value = "Rejected">Rejected</option>

                            </select>
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