import {NextComponentType} from "next";
import { Navbar, Container, NavDropdown, Nav, Offcanvas, Button } from "react-bootstrap";
import logo from "../public/logo.svg";
import Image from "next/image";



const Navigation: NextComponentType = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
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
                        <Nav.Link href="#home"><span style={{color: "#E9ECEF"}}>Home</span></Nav.Link>
                        <Nav.Link href="#partners"><span style={{color: "#E9ECEF"}}>Partners</span></Nav.Link>
                        <Nav.Link href="#blog"><span style={{color: "#E9ECEF"}}>Blog</span></Nav.Link>
                        <Button variant="success" className="mx-3 my-sm-3 my-md-0"><span style={{color: "#E9ECEF"}}>Events</span></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;