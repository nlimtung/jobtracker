import React from "react";

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
        </div>
    )
}