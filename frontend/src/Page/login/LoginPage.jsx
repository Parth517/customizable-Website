// src/components/Login.js
import  { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/auth/login', {
                username,
                password
            });
            setMessage(res.data.msg);
        } catch (err) {
            setMessage(err.response.data.msg);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
