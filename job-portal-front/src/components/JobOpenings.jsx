import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Grid, Card, CardContent } from "@mui/material";
import './JobOpenings.css';

function JobOpenings() {
    const navigate = useNavigate();

    const handleJobApplication = () => {
        navigate("/apply");
    };

    const handleNotify = () => {
        navigate("/status");
    };

    return (
        <div>
            <div className="haf-back">
                {/* Flexbox container for button alignment */}
                <div className="button-container">
                    <Button
                        variant="contained"
                        onClick={handleNotify}
                        sx={{ backgroundColor: 'black', color: 'white', width: 160, height: 40 }}
                    >
                        Notify Status
                    </Button>
                </div>
            </div>


            <Typography variant="h3" align="center" sx={{ marginTop: '20px' }}>
                Job Openings
            </Typography>

            <div className="haf-container">
                {/* Job Listings */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    Software Developer
                                </Typography>
                                <Typography variant="body2">San Francisco, CA</Typography>
                                <Typography variant="body2">Develop and maintain web applications</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    Data Scientist
                                </Typography>
                                <Typography variant="body2">New York, NY</Typography>
                                <Typography variant="body2">Analyze and interpret complex data</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    Project Manager
                                </Typography>
                                <Typography variant="body2">Austin, TX</Typography>
                                <Typography variant="body2">Manage projects and ensure timely delivery</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    DevOps Engineer
                                </Typography>
                                <Typography variant="body2">Boston, MA</Typography>
                                <Typography variant="body2">Automate and streamline infrastructure</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    Cybersecurity Analyst
                                </Typography>
                                <Typography variant="body2">Los Angeles, CA</Typography>
                                <Typography variant="body2">Ensure data and network security</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    Business Analyst
                                </Typography>
                                <Typography variant="body2">Denver, CO</Typography>
                                <Typography variant="body2">Analyze business needs and solutions</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    AI/ML Engineer
                                </Typography>
                                <Typography variant="body2">San Jose, CA</Typography>
                                <Typography variant="body2">Develop machine learning models and AI solutions</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    Content Writer
                                </Typography>
                                <Typography variant="body2">Remote</Typography>
                                <Typography variant="body2">Write and edit engaging content</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    System Administrator
                                </Typography>
                                <Typography variant="body2">Houston, TX</Typography>
                                <Typography variant="body2">Maintain and support IT systems</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    HR Manager
                                </Typography>
                                <Typography variant="body2">Atlanta, GA</Typography>
                                <Typography variant="body2">Oversee employee relations and hiring</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    Cloud Architect
                                </Typography>
                                <Typography variant="body2">Chicago, IL</Typography>
                                <Typography variant="body2">Design and manage cloud infrastructure</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="job-card">
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    Graphic Designer
                                </Typography>
                                <Typography variant="body2">Miami, FL</Typography>
                                <Typography variant="body2">Create visually appealing designs for marketing</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleJobApplication}
                                    sx={{ marginTop: '10px', width: '100%', backgroundColor: 'black' }}
                                >
                                    Apply
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            <div className="haf-foot"></div>
        </div>
    );
}

export default JobOpenings;
