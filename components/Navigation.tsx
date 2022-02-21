import {NextComponentType} from "next";
// @ts-ignore
import styled from "styled-components";
import {Navbar, Container, NavDropdown, Nav, Offcanvas, Button} from "react-bootstrap";
import logo from "../public/logo.svg";
import Image from "next/image";



const Navigation: NextComponentType = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                    <Image
                        src={logo}
                        height="40px"
                        width="150px"
                        className="d-inline-block align-top reverseColors"
                        alt="KTH Foodtech logo"
                    />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#partners">Partners</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Button variant="success" className="mx-3">Events</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;