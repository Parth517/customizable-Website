import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Brand</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
