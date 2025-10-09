import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SCITlogo from "../assets/SCITlogo.png";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const links = [
    { to: "/", label: "Home", icon: <HomeIcon /> },
    { to: "/About", label: "About" },
    {to: "/careers", label: "Careers"},
    { to: "/Contact", label: "Contact" },
  ];

  return (
    <AppBar position="relative" sx={{ backgroundColor: "primary.main" }}>
      <Toolbar>
        {/* Logo and Company Name */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img
            src={SCITlogo}
            alt="Company Logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: { xs: "1rem", sm: "1.5rem" },
            }}
          >
            OMSri ChennaKeshava IT Solutions
          </Typography>
        </Box>

        {/* Links for Desktop */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
          {links.map(({ to, label, icon }) => (
            <Button
              key={to}
              component={NavLink}
              to={to}
              activeClassName="active"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                margin: "0 10px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                "&.active": {
                  fontWeight: "bold",
                  color: "#9eff63",
                },
                "&:hover": {
                  color: "#9eff63",
                  opacity: "0.7",
                }
              }}
            >
              {icon && (
                <Box sx={{ marginRight: "5px", display: "flex" }}>{icon}</Box>
              )}
              {label}
            </Button>
          ))}
        </Box>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "#f4f4f4",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem 0",
          }}
        >
          <img
            src={SCITlogo}
            alt="Company Logo"
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
        </Box>
        <Divider />
        <List>
          {links.map(({ to, label }) => (
            <ListItem key={to} disablePadding>
              <NavLink
                to={to}
                onClick={handleDrawerToggle}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <ListItem button>
                  <ListItemText primary={label} />
                </ListItem>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
