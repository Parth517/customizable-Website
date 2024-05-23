import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password,
      });
      setMessage(res.data.msg);

      localStorage.setItem('isLoggedIn', true); // Store login state
      navigate('/admin'); // Redirect to admin page
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
        </Form.Group>

        <Form.Group>
        <Form.Label>Password:</Form.Label>
          <Form.Control placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button variant="primary"type="submit">Login</Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
