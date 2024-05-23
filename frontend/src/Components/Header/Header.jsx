import {Nav,Navbar,Container} from 'react-bootstrap'


function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Nav className="me-auto">

      </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
