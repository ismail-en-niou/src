import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./login.css";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const userType = location.pathname.startsWith('/root') ? 'root' : 'user';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            user: username,
            pass: password
        };

        try {
            const endpoint = userType === 'root' ? '/root/login' : '/team/login';
            const response = await fetch(`https://apiteam.robixe.online${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log(data);
            if (data.code === 1) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data));
                navigate(`/${userType}/home`);
            } else if (data.code === 0) {
                const confirmed = window.confirm("The Password Is Incorrect Or Username");
                if (!confirmed) {
                    return;
                }
            }
        } catch (error) {
            setError('An error occurred, please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <div className='login'>
            <div className='left-section'>
                <img src="/images/Illustration.svg" alt="" />
            </div>
            <div className='right-section'>
                <h1>Log in</h1>
                <p>Welcome Back! Please enter your details.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="UserName" placeholder='Username' id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" name="Password" placeholder='Password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Sign In</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
}
