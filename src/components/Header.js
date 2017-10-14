import React, {Component} from 'react';
import './styles/header.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
    render () {
        return (
            <Navbar className="menu" inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Kasia Osińska</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">About</NavItem>
                        <NavItem eventKey={2} href="#">Case Study</NavItem>
                        <NavItem eventKey={3} href="#">Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;