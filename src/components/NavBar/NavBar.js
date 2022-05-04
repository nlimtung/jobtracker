import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"



import Nav from 'react-bootstrap/Nav'


export default function NavBar(props) {

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.clear("token")
    window.location.href = '/'
  }

    return(
        <div className="NavBar">
            <Nav
            activeKey="/home"
            >
            <Nav.Item>
                <Nav.Link href="/home">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/applied">Active applications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/rejected">Rejected applications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href = "/favourites">Favourite</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav.Item>
            </Nav>
        </div>
    )
}