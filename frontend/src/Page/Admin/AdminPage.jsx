import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login state
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <h3>Admin Page</h3>
      <p>Welcome to the admin page!</p>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminPage;
