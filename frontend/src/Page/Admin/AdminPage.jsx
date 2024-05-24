import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate('/edit-images');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <Container className="mt-5">
      <h3>Admin Page</h3>
      <p>Welcome to the admin page!</p>
      <Button onClick={handleUpdate} className="me-2">Update Carousel Image</Button>
      <Button onClick={handleLogout} variant="danger">Logout</Button>
    </Container>
  );
};

export default AdminPage;
