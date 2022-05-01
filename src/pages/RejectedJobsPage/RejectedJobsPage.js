import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Button from 'react-bootstrap/Button';

export default function RejectedJobsPage (props) {

    const [rejectedJobs, setRejectedJobs] = useState([])
    
    useEffect(()=>{
        
        const  fetchData= async () => {
            try{
                const fetchReponse =  await fetch('/api/jobs/rejected') 
                const jobs =  await fetchReponse.json();
                const sortedJobs = jobs.sort((a,b)=>{
                    var c = new Date(a.dateApplied);
                    var d = new Date(b.dateApplied)
                    return d-c
                })
            


                setRejectedJobs(sortedJobs)
            }
            catch(err){
                console.log(err)
            }
        }; 
        fetchData()
    }, [])
    return(
        
        <div>
            <NavBar/>
            <h1 className="headerTitle">Rejected jobs</h1>
            {rejectedJobs.map((r) =>(
                <div key = {r._id}>
                    <hr></hr>

                    <h5>Date Applied: {new Date(r.dateApplied).toDateString()}</h5>

                    <h3>{r.company}</h3>
                    {(r.interviewed === true)?
                        <h5><span>interviewed</span></h5>:
                        <h4></h4>
                    }
                    <a href = {r.postLink}>
                        <Button
                            size="sm"
                            type = "submit"
                            variant="outline-dark"
                            >Job Posting Link
                        </Button>
                        </a>  

                </div>
            )) }
        </div>
    )
}