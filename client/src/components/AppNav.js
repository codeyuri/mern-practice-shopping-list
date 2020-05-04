import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Alert } from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

function AppNav() {
    const auth = useSelector(state => state.auth);
    const { isAuthenticated, user } = auth;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">shopyuri</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            { isAuthenticated ? (
                                <>
                                    <NavItem>
                                        <span className="navbar-text mr-3">{ user && (<>Welcome back, <strong>{user.name}</strong>!</>) }</span>
                                    </NavItem>
                                    <NavItem>
                                        <Logout />
                                    </NavItem>
                                </>
                            ) : (
                                <>
                                    <NavItem>
                                        <RegisterModal />
                                    </NavItem>
                                    <NavItem>
                                        <LoginModal />
                                    </NavItem>
                                </>
                            ) }
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AppNav;
