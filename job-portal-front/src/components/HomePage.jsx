import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography, Grid, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink from react-router-dom

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setIsLoggedIn(true);
      setUsername(storedUser);
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  }, []);

  return (
    <div style={styles.container}>
      {!isLoggedIn ? (
        <div>
          <Typography variant="h3" gutterBottom>
            Welcome to JobMatchPro
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Register or Login now to get started with finding your dream job and more.
          </Typography>

          <Grid container spacing={4} style={styles.gridContainer}>
            {/* Job Openings */}
            <Grid item xs={12} sm={6} md={4}>
              <Card style={styles.card}>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Explore Job Openings
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Browse through hundreds of job listings and apply to the ones that match your profile.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Track Application Status */}
            <Grid item xs={12} sm={6} md={4}>
              <Card style={styles.card}>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Track Application Status
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Check the status of your job applications to know where you stand in the hiring process.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Profile Management */}
            <Grid item xs={12} sm={6} md={4}>
              <Card style={styles.card}>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Manage Your Profile
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Keep your profile updated with the latest skills, experience, and certifications to stand out.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>
          <Typography variant="h3" gutterBottom>
            Welcome Back, {username}!
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Start applying for your dream job now and track your applications. Let's get you started.
          </Typography>

          {/* Eye-catching links for functionalities after login */}
          <Grid container spacing={4} style={styles.gridContainer}>
            {/* Job Applications */}
            <Grid item xs={12} sm={6} md={4}>
              <Card style={styles.card}>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Job Applications
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>15+ jobs added since your last login!</strong>
                    <br />
                    Browse new job listings and apply directly to opportunities that match your skills and interests.
                  </Typography>
                  <Box mt={2}>
                    <Link component={RouterLink} to="/jobs" style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="primary" fullWidth>
                        View Jobs
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Mock Test */}
            <Grid item xs={12} sm={6} md={4}>
              <Card style={styles.card}>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Mock Tests
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>20+ new questions added recently!</strong>
                    <br />
                    Test your skills with up-to-date mock tests that are based on the latest company-specific questions.
                  </Typography>
                  <Box mt={2}>
                    <Link component={RouterLink} to="/mocktest" style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="primary" fullWidth>
                        Start Mock Test
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Profile & Settings */}
            <Grid item xs={12} sm={6} md={4}>
              <Card style={styles.card}>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Manage Your Profile
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Keep your profile updated with your latest achievements and experiences to stay competitive.
                  </Typography>
                  <Box mt={2}>
                    <Button variant="contained" color="primary" fullWidth>
                      Edit Profile
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  gridContainer: {
    marginTop: '30px',
  },
  card: {
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  cardButton: {
    marginTop: '20px',
    backgroundColor: 'black',
    color: 'white',
  },
};

export default HomePage;
