import React from "react";

export default function AddJobForm(props) {
    return(
        <div>
            <form onSubmit={(e) =>props.handleSubmit(e)}>
                <label> Company name</label>
                <input
                name = "company"
                value = {props.company}
                onChange= {props.handleChange}
                />

                <label>Date Applied</label>
                <input
                name = "dateApplied"
                type =  "date"
                value = {props.dateApplied}
                onChange= {(e)=>props.handleChange(e)}

                />

                <label>Link</label>
                <input
                    name = "postLink"
                    value = {props.postLink}
                    onChange= {(e)=>props.handleChange(e)}
                />


                <button
                
                type = "submit"
                >Submit</button>
            </form>
        </div>
    )
}