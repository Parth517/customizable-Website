import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Spinner, Container } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoginChecked, setIsLoginChecked] = useState(false);
  const [redirecting, setRedirecting] = useState(false);  
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/admin');
    } else {
      setIsLoginChecked(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password,
      });
      setMessage(res.data.msg);

      localStorage.setItem('isLoggedIn', 'true');
      setLoading(false);
      setRedirecting(true); 
        navigate('/admin'); 
      
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Login failed');
      setLoading(false); 
    }
  };

  if (!isLoginChecked) {
    return <Spinner animation="border" />;
  }

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" disabled={loading || redirecting}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
        </Button>
        <br/>
      </form><br/>
      {message && <p>{message}</p>}
      {redirecting && <Spinner animation="border" className="mt-3" />}
      <br />
    </Container>
  );
};

export default Login;
