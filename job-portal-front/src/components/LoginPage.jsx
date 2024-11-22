import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Box, Alert } from '@mui/material';

export default function LoginPage() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login Successful");
        alert("Login Successful! Redirecting you to home page");
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', credentials.username);
        navigate('/');
      } else {
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          boxShadow: 3,
          borderRadius: '8px',
          backgroundColor: 'white',
          width: '100%',
          maxWidth: 400
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        {/* Error Message */}
        {errorMessage && <Alert severity="error" style={{ width: '100%', marginBottom: '16px' }}>{errorMessage}</Alert>}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
            autoFocus
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            sx={{ marginBottom: 2 }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>

        {/* Register Link */}
        <Typography variant="body2" style={{ marginTop: '16px' }}>
          Don't have an account? <Link to="/register">Register here</Link>
        </Typography>
      </Box>
    </Container>
  );
}
