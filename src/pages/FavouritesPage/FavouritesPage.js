import React, {useState, useEffect} from "react";

import NavBar from "../../components/NavBar/NavBar";

export default function FavouritesPage(props) {
    
    const [favouriteJobs, setFavouriteJobs] = useState([])

    useEffect(()=>{
        
        const  fetchData= async () => {
            try{
                const fetchReponse =  await fetch('/api/jobs/favourites') 
                const jobs =  await fetchReponse.json();
                setFavouriteJobs(jobs)
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
                    <h4>{f.company}</h4>
                    <h4>Date Applied: {new Date(f.dateApplied).toDateString()}</h4>
                    <h4>Status: {f.status}</h4>
                    <hr></hr>
                </div>
            )) }

            

            
        </div>
    )
}