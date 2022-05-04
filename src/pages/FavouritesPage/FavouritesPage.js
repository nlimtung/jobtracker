import React, {useState, useEffect} from "react";

import NavBar from "../../components/NavBar/NavBar";

export default function FavouritesPage(props) {
    
    const [favouriteJobs, setFavouriteJobs] = useState([])

    useEffect(()=>{
        
        const  fetchData= async () => {
            try{
                let jwt = localStorage.getItem('token')
                const fetchReponse =  await fetch('/api/jobs/favourites', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
                const jobs =  await fetchReponse.json();
                const sortedJobs = jobs.sort((a,b)=>{
                    var c = new Date(a.dateApplied);
                    var d = new Date(b.dateApplied)
                    return d-c
                })
                setFavouriteJobs(sortedJobs)
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
            <h1 className="headerTitle">Favourites</h1>
            {favouriteJobs.map((f) =>(
                <div key = {f._id}>
                    <hr></hr>
                    <h4>Date Applied: {new Date(f.dateApplied).toDateString()}</h4>
                    <h3>{f.company}</h3>
                    <h4>Status: <span>{f.status}</span></h4>
                </div>
            )) }

            

            
        </div>
    )
}