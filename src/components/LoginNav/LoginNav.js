import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



import Nav from 'react-bootstrap/Nav'


export default function LoginNav(props) {
    return(
        <div className="NavBar">
            <Nav
            activeKey="/home"
            >
            <Nav.Item>
                <Nav.Link onClick={(e) => props.handleLoginChange(e)}>Login In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={(e) => props.handleSignUpChange(e)}>Signup</Nav.Link>
            </Nav.Item>


            </Nav>
        </div>
    )
}