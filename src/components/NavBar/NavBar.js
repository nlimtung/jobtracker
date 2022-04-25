import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav'


export default function NavBar(props) {
    return(
        <div>
            <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link href="/home">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Active applications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Rejected applications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">Favourite</Nav.Link>
            </Nav.Item>

            </Nav>
        </div>
    )
}