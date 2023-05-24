import {Container, Nav, Navbar} from "react-bootstrap";

import {NavLink} from "react-router-dom";

const PrimaryNav = props => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>NHL Season Stat Predictions</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link><NavLink to="/">Predictions</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default PrimaryNav;