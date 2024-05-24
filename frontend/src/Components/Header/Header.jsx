import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './Header.css'


function Header() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const navigate=useNavigate();

  useEffect(()=>{
    const loggedIn=localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn==='true');
  },[])

  const handleLogout=()=>{
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Brand</Navbar.Brand>
      <Nav className="me-auto">
        {isLoggedIn?(
          <>
            <Nav.Link as={Link} to="/edit-images">Update</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </>
        ):(
          <Nav className='ms-auto'>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      )}
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
