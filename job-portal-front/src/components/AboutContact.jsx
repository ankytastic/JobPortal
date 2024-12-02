import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button, Alert } from '@mui/material';
import s1 from '../components/images/ankit.png';
import s2 from '../components/images/nimal.png';
import s3 from '../components/images/pranav.png';
import s4 from '../components/images/puneeth.png';
import s5 from '../components/images/deepthi.jpg';

// Sample data for the About Us Section (You can replace it with dynamic data)
const students = [
  { name: 'Ankit Raj', image: s1 , company: 'TechCorp', package: '10 LPA' },
  { name: 'Nimal Dinesh M', image: s2 , company: 'DevSolutions', package: '8 LPA' },
  { name: 'Pranav Sahu', image: s3 , company: 'CodeWorks', package: '12 LPA' },
  { name: 'Puneeth', image: s4 , company: 'InnovateX', package: '9 LPA' },
  { name: 'Satya U', image: s5 , company: 'FutureTech', package: '11 LPA' },
];

const AboutContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // For now, we'll just show a success message on form submission
    setAlertMessage('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container>
      {/* About Us Section */}
      <section id="about-us" style={{ margin: '50px 0' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Placed Students
        </Typography>
        <Grid container spacing={4}>
          {students.map((student, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <img
                  src={student.image}
                  alt={student.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6">{student.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Company: {student.company}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Package: {student.package}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" style={{ margin: '50px 0' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        {alertMessage && <Alert severity="success">{alertMessage}</Alert>}
        <form onSubmit={handleSubmitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            style={{ marginTop: '20px' }}
          />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default AboutContact;
