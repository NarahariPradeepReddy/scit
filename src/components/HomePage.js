import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../assets/slide 1.jpg";
import Slide2 from "../assets/slide 2.jpg";
import Slide3 from "../assets/slide3.jpg";
import Slide4 from "../assets/slide4.jpg";
import Slide5 from "../assets/slide5.jpg";
// import Pradeep from "../assets/Pradeep.png"
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleOnClick = () => {
    navigate("/Contact");
  };

  return (
    <Container maxWidth="lg" sx={{ padding: "2rem 1rem" }}>
      {/* Welcome Section */}
      <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "primary.main",
            fontSize: { xs: "2rem", sm: "3rem" },
          }}
        >
          Welcome to SCIT Solutions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            marginBottom: "2rem",
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
        >
          We are a team inspired and aspired by the rapid changes in the world
          of Technology.
        </Typography>
      </Box>

      {/* Slider Section */}
      <Box
        sx={{
          width: "100%",
          margin: "0 auto 2rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          height: "80vh",
        }}
      >
        <Slider {...settings}>
          <img
            src={Slide1}
            alt="Slide 1"
            style={{
              width: "100%",
              display: "block",
              height: "80vh",
              objectFit: "cover",
            }}
          />
          <img
            src={Slide2}
            alt="Slide 2"
            style={{
              width: "100%",
              display: "block",
              height: "80vh",
              objectFit: "cover",
            }}
          />
          <img
            src={Slide3}
            alt="Slide 3"
            style={{
              width: "100%",
              display: "block",
              height: "80vh",
              objectFit: "cover",
            }}
          />
          <img
            src={Slide4}
            alt="Slide 4"
            style={{
              width: "100%",
              display: "block",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <img
            src={Slide5}
            alt="Slide 5"
            style={{
              width: "100%",
              display: "block",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Slider>
      </Box>

      {/* Information Sections */}
      <Grid container spacing={4}>
        {/* Services Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: "background.paper",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px 3px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "primary.main",
              }}
            >
              Services We Offer
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
              US IT Recruiting
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
              Domestic IT Recruiting
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
              React.js Development
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
              Power BI Solutions
            </Typography>
          </Box>
        </Grid>

        {/* Why Choose Us Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: "background.paper",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px 3px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "primary.main",
              }}
            >
              Why Choose Us
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
              Timely Response
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
              24/7 Client Support
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
              Highly Experienced Team
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
              Dedicated Support
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Mission Statement */}
      <Box
        sx={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "primary.main",
          }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: "1.1rem" }}
        >
          At SCIT Solutions, we aim to bridge the gap between technology and
          business needs by delivering top-notch solutions tailored to your
          requirements. Our goal is to empower businesses with cutting-edge
          tools for growth and success.
        </Typography>
      </Box>

      {/* Customer Testimonials */}
      <Box sx={{ marginTop: "3rem" }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
            marginBottom: "2rem",
          }}
        >
          What Our Clients Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: "background.paper",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
              }}
            >
              <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                "SCIT Solutions helped streamline our hiring process, saving us
                time and effort. Highly recommended!"
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ marginTop: "0.5rem", fontWeight: "bold" }}
              >
                — John Doe, HR Manager
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: "background.paper",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
              }}
            >
              <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                "The Power BI solutions provided were exactly what we needed to
                make data-driven decisions."
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ marginTop: "0.5rem", fontWeight: "bold" }}
              >
                — Sarah Lee, Operations Head
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: "background.paper",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
              }}
            >
              <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                "Fantastic team to work with! The React.js development exceeded
                our expectations."
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ marginTop: "0.5rem", fontWeight: "bold" }}
              >
                — Michael Brown, Tech Lead
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Team Section */}
      {/* <Box sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
            marginBottom: "2rem",
          }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <img
                src="path-to-image.jpg"
                alt="Team Member 1"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Team Member 1
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Role 1
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <img
                src={Pradeep}
                alt="Team Member 2"
                style={{
                  width: "150px",
                  height: "155px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "1px 2px 10px 2px #3a3737"
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Team Member 
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Ops Manager
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <img
                src="path-to-image.jpg"
                alt="Team Member 3"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Team Member 3
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Role 3
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box> */}

      {/* Call-to-Action Section */}
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "primary.main",
          color: "white",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
          Join us today and experience the SCIT Solutions difference.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleOnClick}
          sx={{ borderRadius: "25px", padding: "0.8rem 2rem" }}
        >
          Contact Us
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;
