import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    cPassword: '', // Only used for validation, not sent to the backend
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    cPassword: '',
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate inputs before sending request
    const validationErrors = validateAll();
    if (validationErrors) {
      setErrors(validationErrors);
      // Create a string of error messages
      const errorMessages = Object.values(validationErrors).join('\n');
      alert(`Form is not valid:\n${errorMessages}`); // Show errors in prompt
      return;
    }

    console.log("Submitting: ", {
      username: registerData.username,
      email: registerData.email,
      password: registerData.password,
    });

    // Send async POST Call to server
    try {
      const response = await fetch('http://localhost:8080/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: registerData.username,
          email: registerData.email,
          password: registerData.password, // Only send required fields
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful: ", data);
        alert("User registered successfully! \nRedirecting you to login page.");
        navigate('/login');
      } else {
        const errorData = await response.json();
        console.error("Registration failed: ", errorData);
        alert(errorData.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error occurred while registering: ", error);
      alert("Network error. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });

    // Remove error message when the field is being updated
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validate the field being blurred
    const validationErrors = validateField(name, value);
    if (validationErrors) {
      setErrors({
        ...errors,
        ...validationErrors,
      });
    }
  };

  const validateField = (fieldName, value) => {
    let fieldErrors = {};

    switch (fieldName) {
      case 'email':
        // Email validation (basic regex for email format)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          fieldErrors.email = 'Please enter a valid email address.';
        }
        break;
      case 'password':
        // Password length validation
        if (value.length < 6) {
          fieldErrors.password = 'Password should be at least 6 characters long.';
        }
        break;
      case 'cPassword':
        // Password match validation
        if (value !== registerData.password) {
          fieldErrors.cPassword = 'Passwords do not match.';
        }
        break;
      default:
        break;
    }

    return Object.keys(fieldErrors).length > 0 ? fieldErrors : null;
  };

  const validateAll = () => {
    let validationErrors = {};

    // Validate email
    const emailErrors = validateField('email', registerData.email);
    if (emailErrors) validationErrors = { ...validationErrors, ...emailErrors };

    // Validate password
    const passwordErrors = validateField('password', registerData.password);
    if (passwordErrors)
      validationErrors = { ...validationErrors, ...passwordErrors };

    // Validate confirm password
    const cPasswordErrors = validateField('cPassword', registerData.cPassword);
    if (cPasswordErrors)
      validationErrors = { ...validationErrors, ...cPasswordErrors };

    return Object.keys(validationErrors).length > 0 ? validationErrors : null;
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '5rem' }}>
      <div className="register-page">
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                variant="outlined"
                fullWidth
                value={registerData.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.username}
                helperText={errors.username}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                value={registerData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                variant="outlined"
                type="password"
                fullWidth
                value={registerData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                name="cPassword"
                variant="outlined"
                type="password"
                fullWidth
                value={registerData.cPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.cPassword}
                helperText={errors.cPassword}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '1rem' }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>

        <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
          Already have an account? <Link to="/login">Login here</Link>
        </Typography>
      </div>
    </Container>
  );
}
