import React, {useState} from "react";
import { Button } from "bootstrap";

export default function SignUpForm(props){
    const [name, setName] = useState ("")
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")


    const disable = password !== confirm;

    const handleChange =  (e) =>{
        const target = e.target
        const name = target.name
        const value = target.value
        if (name === "name") {
          setName(value)
        }
        else if(name ==="email") {
            setEmail(value)
        }
        else if (name ==="password"){
         setPassword(value)
        }
        else if (name ==="confirm"){
            setConfirm(value)
        }
      }



      const handleSubmit = async (e) => {
        e.preventDefault();
        try{

            const signUp = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    confirm
                  })
              })


              const token = await signUp.json() 
              window.localStorage.setItem('token', token)
              
              const userDoc = await JSON.parse(window.atob(token.split('.')[1])).user; 
              props.setUserInState(userDoc)
        }
        catch(err) {
            console.log ("sign failed", err)
            // props.setState({error: 'Signup error'})
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type= "text"
                    name = "name"
                    value = {name}
                    onChange = {handleChange}
                    required 
                />
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
                <label>Confirm Password</label>
                <input
                    type= "password"
                    name = "confirm"
                    value = {confirm}
                    onChange = {handleChange}
                    required 
                />
                <button type="submit" disabled={disable} >Sign Up</button>
            </form>
        </div>
    )
}