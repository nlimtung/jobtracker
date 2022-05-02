import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';


export default function UpdateStatusForm(props) {
    return(
        <div>
            <h4>Update status: </h4>
            <form onSubmit={(e) => props.handleChangeStatusButton(e)}>
                <select
                    name = "status"
                    value = {props.status}
                    id = {props.id}
                    onChange= {props.handleChangeStatus}
                >
                    <option></option>
                    <option value = "Interview">Interview</option>
                    <option value = "Rejected">Rejected</option>

                </select>
<br></br>
<br></br>

                <Button
                    type = "submit"
                    variant="outline-dark"
                    >Submit
                </Button>
            </form>
        </div>
    )
}