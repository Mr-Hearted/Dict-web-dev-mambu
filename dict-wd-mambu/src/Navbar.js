import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">DICT Cert Gen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <NavDropdown title="Webinar Management" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/add-webinar">Add Webinar</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/webinar-list">Webinar List</NavDropdown.Item>
            </NavDropdown>
            <Link to="/participant-management" className="nav-link">Participants Management</Link>
          </Nav>
          <Nav>
            <Link to="/" className="nav-link">Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
