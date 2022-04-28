import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';


import Nav from 'react-bootstrap/Nav'


export default function NavBar(props) {
    return(
        <div>
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

            </Nav>
        </div>
    )
}