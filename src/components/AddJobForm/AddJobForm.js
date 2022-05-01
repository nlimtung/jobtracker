import React from "react";
import "./AddJobForm.css"

export default function AddJobForm(props) {
    return(
        <div className="AddJobForm">
            <h2>Add more job:</h2>
            <form onSubmit={(e) =>props.handleSubmit(e)}>

                <label> Company name:</label>
                <input
                name = "company"
                value = {props.company}
                onChange= {props.handleChange}
                /><br></br><br></br>


                <label>Link: </label>
                <input
                    name = "postLink"
                    value = {props.postLink}
                    onChange= {(e)=>props.handleChange(e)}
                    /><br></br><br></br>


                <button
                    type = "submit"
                    >Submit
                </button>
            </form>
        </div>
    )
}