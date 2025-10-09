import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const jobListings = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Hyderabad, India",
    type: "Full-time",
    description:
      "Work with React.js, MUI, and modern frontend tools to build scalable web apps.",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    description:
      "Build APIs with Node.js, Express, and MongoDB. Optimize performance and security.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Bangalore, India",
    type: "Contract",
    description:
      "Design modern, user-friendly interfaces and collaborate with developers.",
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <Container maxWidth="lg" style={{ padding: "40px 20px" }}>
      {/* Hero Section */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        Join Our Team
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        paragraph
      >
        At SCIT Technologies, we’re building the future of software training and
        development. Come grow with us.
      </Typography>

      {/* Why Work With Us */}
      <Grid container spacing={4} style={{ marginTop: "40px" }}>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🚀 Growth
              </Typography>
              <Typography color="textSecondary">
                Learn and grow with real projects, mentorship, and a clear career path.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🤝 Culture
              </Typography>
              <Typography color="textSecondary">
                Friendly, collaborative, and inclusive environment where you matter.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                💡 Innovation
              </Typography>
              <Typography color="textSecondary">
                Work on exciting problems using modern tools and technologies.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Job Listings */}
      <div style={{ marginTop: "60px" }}>
        <Typography variant="h4" gutterBottom>
          Open Positions
        </Typography>
        <Grid container spacing={3}>
          {jobListings.map((job) => (
            <Grid item xs={12} sm={6} key={job.id}>
              <Card
                elevation={2}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedJob(job)}
              >
                <CardContent>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography color="textSecondary">
                    {job.location} • {job.type}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Job Detail Modal */}
      <Dialog
        open={Boolean(selectedJob)}
        onClose={() => setSelectedJob(null)}
        maxWidth="sm"
        fullWidth
      >
        {selectedJob && (
          <>
            <DialogTitle>{selectedJob.title}</DialogTitle>
            <DialogContent dividers>
              <Typography color="textSecondary" gutterBottom>
                {selectedJob.location} • {selectedJob.type}
              </Typography>
              <Typography>{selectedJob.description}</Typography>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => alert("Redirect to application form")}
              >
                Apply Now
              </Button>
              <Button onClick={() => setSelectedJob(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}
