import React from 'react';
import { Button, TextField, Grid, Typography, Select, MenuItem, FormControl, InputLabel, Container, Box } from '@mui/material';
import './Jobavailability.css';
import { useNavigate } from 'react-router-dom';

function Jobavailability() {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        backgroundImage: 'url(path_to_your_image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: 'white',
            opacity: 0.9,
            padding: 3,
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <form>
            <Typography variant="h4" align="center" gutterBottom>
              Application
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Father Name"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="DOB"
                  type="date"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Course"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="College"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="University"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Percentage"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Skill 1"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Proficiency</InputLabel>
                  <Select defaultValue="Beginner">
                    <MenuItem value="Beginner">Beginner</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Advanced">Advanced</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleApply}>
                Cancel
              </Button>
              <Button variant="outlined" color="warning" type="reset">
                Reset
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default Jobavailability;
