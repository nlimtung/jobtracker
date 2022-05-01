import React from "react";
import UpdateStatusForm from "../UpdateStatusForm/UpdateStatusForm";

export default function JobIndexItem(props) {

    
    return(
        <div>
            {props.allJobs.map((j)=>(
                <div key = {j._id}>
                    <h2>{j.company}</h2>
                    <h4>Date Applied: {new Date(j.dateApplied).toDateString()}</h4>
                    <h4>Link: {j.postLink}</h4>
                    <h4>Status: {j.status}</h4>



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
                <button
                    type = "submit"
                >
                    Submit
                </button>
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
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}