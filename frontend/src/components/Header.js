import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import {LinkContainer} from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Deerwalk E-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <i className="fas fa-shopping-cart"></i>
                                Cart
                            </Nav.Link>

                            <Nav.Link>
                                <i className="fas fa-user"></i>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr style={{color:"solid black", width:"80%",height:"2px",margin:"auto"}} />
        </header>
    );
};
export default Header;