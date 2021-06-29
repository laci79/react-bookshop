import React from 'react';
import { useHistory } from "react-router-dom";
import basket from './../images/basket.png';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


const Header = props => {

    const currentRoute = useHistory().location.pathname.toLowerCase();
 
    return (
        <Navbar  expand="lg" fixed="top"  className="nav1">
            <Navbar.Brand href="/react-bookshop" className="brand"><span className="brand-name">Útikönyvek Boltja</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/" className={currentRoute.endsWith("/") ? "tab active1" : "tab"}>
                        <Nav.Link className="nav-link"><span className="nav-item">Főoldal</span></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/About" className={currentRoute.includes("about") ? "tab active1" : "tab"}>
                        <Nav.Link className="nav-link"> <span className="nav-item">Tudnivalók</span></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact" className={currentRoute.includes("contact") ? "tab active1" : "tab"}>
                        <Nav.Link className="nav-link"><span className="nav-item">Elérhetőség</span></Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            <button className="basket-button" onClick={props.showOrder} >  <img src={basket} alt="basket" className="basket-img"></img></button>
        </Navbar>
    );

}

export default Header;