import React, {useState} from "react";
import { Button } from "bootstrap";

export default function LoginForm(props){
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")



    const handleChange =  (e) =>{
        const target = e.target
        const name = target.name
        const value = target.value
        if (name ==="email") {
            setEmail(value)
        }
        else if (name ==="password"){
         setPassword(value)
        }
  
      }



      const handleSubmit = async (e) => {
        e.preventDefault();
        try{

            const login = await fetch('/api/users/login', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email,
                    password,
                  })
              })
   

              if (!login.ok) throw new Error('Fetch failed - Bad request')
              
              let token = await login.json() 
              localStorage.setItem("token", token)  
              
              const userDoc = await JSON.parse(window.atob(token.split('.')[1])).user; 
              props.setUserInState(userDoc)
              window.location.href = '/home'

        }
        catch(err) {
            console.log ("sign failed", err)
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>

                <label>Email</label>
                <input
                    type= "text"
                    name = "email"
                    value = {email}
                    onChange = {handleChange}
                    required 
                />
                <label>Password</label>
                <input
                    type= "password"
                    name = "password"
                    value = {password}
                    onChange = {handleChange}
                    required 
                />
      
                <button type="submit"  >Login</button>
            </form>
        </div>
    )
}




