import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Deerwalk E-Commerce</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">

                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>
                                    Cart
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/user">

                                <Nav.Link>
                                    <i className="fas fa-user"></i>
                                    Login
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr style={{ color: "solid black", width: "90%", height: "2px", margin: "auto" }} />
        </header>
    );
};
export default Header;