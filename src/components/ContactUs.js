import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

function ContactUs() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        padding: 2,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 4,
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            marginBottom: 2,
          }}
        >
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          We’d love to hear from you! Whether you have a question, feedback, or
          a new project idea, feel free to reach out using the form below.
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: 2,
          padding: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 3,
            color: "primary.main",
          }}
        >
          Contact Form
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              variant="outlined"
              fullWidth
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              variant="outlined"
              fullWidth
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              fullWidth
              required
              rows={4}
              multiline
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: 1.5,
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          marginBottom: 4,
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", marginTop: 2 }}
        >
          Alternatively, contact us at <strong>hr@omscit.com</strong>{" "}
          {/* or call us at <strong>+91 7386441520</strong>. */}
          </Typography>
          <Typography
          variant="body2"
          sx={{ color: "text.secondary", marginTop: 2 }}
        >
          <em>
            Our working hours are Monday to Friday, 9 AM to 8 PM (IST). We aim
            to respond within 24 hours.
          </em>
        </Typography>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your message has been submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactUs;
