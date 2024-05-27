import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Navbar className="dark-gray-navbar" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
         Brand
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link>
                <Nav.Link as={Link} to="/add-image">Add Image</Nav.Link>
                <Nav.Link as={Link} to="/add-section">Add Section</Nav.Link>
                <Nav.Link as={Link} to="/edit-images">Update Image</Nav.Link>
                <Nav.Link as={Link} to="/edit-section">Update Section</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <h1></h1>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
