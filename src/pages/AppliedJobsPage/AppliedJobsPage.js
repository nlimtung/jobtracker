import React, { useState, useEffect } from "react";
import './AppliedJobsPage.css'
import NavBar from "../../components/NavBar/NavBar";
import UpdateStatusForm from "../../components/UpdateStatusForm/UpdateStatusForm";
import JobIndexItem from "../../components/JobIndexItem/JobIndexItem";

export default function AppliedJobsPage(props) {
    const [allJobs, setAllJobs] = useState([])
    const[status, setStatus] = useState("")
    const [jobID, setJobID] = useState("")

    const handleChangeStatus = async (e) =>{
        const target = e.target
        const id = target.id
        const value = target.value
        console.log(value)
        setJobID(id) 
        setStatus(value)
    }

    const handleChangeStatusButton = async (e) =>{
        e.preventDefault()
        try{

            const updateJob = await fetch ("/api/jobs/applied/:id/updatestatus", {
                method: "PUT", 
                headers: {"Content-type": "application/json"},
                body: JSON.stringify ({
                    status,
                    jobID

                })
            })
            let serverResponse = await updateJob.json()
            console.log("Success:", serverResponse)  
            window.location.reload()


        }
        catch(err){
            console.log(err)  
        }
    }

    const handleFavourite = async (e) =>{
        e.preventDefault()
        console.log (e.target)
        try{
            let jwt = localStorage.getItem('token')

            const updateJob = await fetch ("/api/jobs/applied/:id/favourite", {
                method: "PUT", 
                headers: {"Content-type": "application/json", 'Authorization': 'Bearer ' + jwt},
                body: JSON.stringify ({
                    id: e.target.id
                })
            })
            let serverResponse = await updateJob.json()
            console.log("Success:", serverResponse)  
            window.location.reload()
        }
        catch(err){
            console.log(err)
        }
    }
    

    useEffect(()=>{
        const  fetchData= async () => {
            try{
                let jwt = localStorage.getItem('token')

                const fetchReponse =  await fetch('/api/jobs', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
                const jobs =  await fetchReponse.json();
                setAllJobs(jobs)
            }
            catch(err){
                console.log(err)
            }
        }; 
        fetchData()
    }, [])



    return(

        <div className = 'AppliedJobsPage'>
            <NavBar/>
            <h1 className="headerTitle">Active applications</h1>

            <JobIndexItem
                allJobs = {allJobs}
                handleFavourite = {handleFavourite}
                handleChangeStatus= {handleChangeStatus} 
                handleChangeStatusButton= {handleChangeStatusButton}
                status = {status}
            />

        </div>
    )
}