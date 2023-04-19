import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/add-webinar" className="nav-link">Add Webinar</Link>
            <Link to="/webinar-list" className="nav-link">Webinar List</Link>
            <Link to="/participant-management" className="nav-link">Participants Management</Link>
          </Nav>
          <Nav>
            <Link to="/" className="nav-link">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
