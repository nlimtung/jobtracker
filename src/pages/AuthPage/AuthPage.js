import React,  {useState} from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SIgnUpForm/SignUpForm";
import LoginNav from "../../components/LoginNav/LoginNav";

export default function AuthPage(props){
    const [displayLoginIn, setDisplayLogIn] = useState(true)



    const handleLoginChange = (e)=>{
        setDisplayLogIn(true)
    }

    const handleSignUpChange = (e)=>{
        setDisplayLogIn(false)
    }

    return(
        <div>
            <LoginNav handleLoginChange = {handleLoginChange}
                displayLoginIn = {displayLoginIn}
                handleSignUpChange = {handleSignUpChange}/>
            
            {displayLoginIn === true?
                <LoginForm setUserInState={props.setUserInState}/> :
                <SignUpForm setUserInState={props.setUserInState} />
            
            }

        </div>
    )
}