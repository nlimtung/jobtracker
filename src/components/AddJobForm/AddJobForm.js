import React from "react";
import "./AddJobForm.css";
import Button from 'react-bootstrap/Button';


export default function AddJobForm(props) {
    return(
        <div className="AddJobForm">
            <h2>Add another applied job :</h2>
            <form onSubmit={(e) =>props.handleSubmit(e)}>

                <label> Company name:</label>
                <br></br>
                <input
                name = "company"
                value = {props.company}
                onChange= {props.handleChange}
                /><br></br><br></br>


                <label>Link: </label>
                <br></br>

                <input
                    name = "postLink"
                    value = {props.postLink}
                    onChange= {(e)=>props.handleChange(e)}
                    /><br></br><br></br>


                <Button
                    type = "submit"
                    variant="outline-dark"
                    >Submit
                </Button>
            </form>
        </div>
    )
}