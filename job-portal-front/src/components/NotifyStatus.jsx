import React, { useState } from "react";
import { TextField, MenuItem, Select, InputLabel, FormControl, Button, Container, Grid, Typography } from "@mui/material";

function NotifyStatus() {
  const [status, setStatus] = useState("ns-select-an-option");
  const [message, setMessage] = useState("");

  const handleStatusChange = (e) => {
    const selectedValue = e.target.value;
    setStatus(selectedValue);

    switch (selectedValue) {
      case "ns-rejected":
        setMessage(
          "We regret to inform you that your application for the position has been rejected. This decision was made after a thorough review of your profile and qualifications. We encourage you to apply for other positions in the future that better align with your skills."
        );
        break;
      case "ns-shortlisted":
        setMessage("Congratulations! You have been shortlisted for the position.");
        break;
      case "ns-interviewcall":
        setMessage(
          "You are invited to attend an interview for the position. Please check your email for further details and confirm your availability."
        );
        break;
      case "ns-offer":
        setMessage(
          "We are pleased to offer you the position! Please review the offer letter sent to your email and let us know if you have any questions."
        );
        break;
      default:
        setMessage("");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        marginTop: 0, // Removes top margin
        paddingTop: 5, // Removes top padding
        paddingBottom: "2rem", // Optional: Adds bottom padding for better spacing
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Notify Applicant Status
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              placeholder="Enter the recipient's email address"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="ns-selectstatus-label">Select Status</InputLabel>
              <Select
                labelId="ns-selectstatus-label"
                value={status}
                onChange={handleStatusChange}
                label="Select Status"
                fullWidth
              >
                <MenuItem value="ns-select-an-option" disabled>
                  Select an Option
                </MenuItem>
                <MenuItem value="ns-rejected">Rejected</MenuItem>
                <MenuItem value="ns-shortlisted">Shortlisted</MenuItem>
                <MenuItem value="ns-interviewcall">Interview Call</MenuItem>
                <MenuItem value="ns-offer">Offer</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Message"
              value={message}
              fullWidth
              multiline
              minRows={4}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              style={{ marginTop: "1rem" }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default NotifyStatus;
