import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate('/edit-images');
  };
  const handleUpdateSection = () => {
    navigate('/edit-section');
  };
  const handleAddImage=()=>{
    navigate('/add-image');
  }

  const handleAddSection=()=>{
    navigate('/add-section');
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <Container className="mt-5">
      <h3>Admin Page</h3>
      <p>Welcome to the admin page!</p>
      <Button onClick={handleUpdate} className="me-2">Update Carousel Image</Button>
      <Button onClick={handleAddImage} className="me-2">Add Carousel Image</Button>
      <Button onClick={handleUpdateSection} className="me-2">Update Section</Button>
      <Button onClick={handleAddSection} className="me-2">Add Section</Button>
      <Button onClick={handleLogout} variant="danger">Logout</Button>
    </Container>
  );
};

export default AdminPage;
