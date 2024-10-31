import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const FormUserDetails = ({ values, handleChange, nextStep }) => {

  // Handle form submission
  const handleContinue = (event) => {
    event.preventDefault();
    nextStep();
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ position: "absolute", left: 16 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" textAlign="center">
            Enter User Details
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleContinue}
        sx={{ mt: 3, width: "100%", maxWidth: 400 }}
      >
        <TextField
          name="firstName"
          label="First Name"
          placeholder="Enter Your First Name"
          onChange={handleChange}
          value={values.firstName}
          fullWidth
          margin="normal"
          variant="standard"
        />
        <TextField
          name="lastName"
          label="Last Name"
          placeholder="Enter Your Last Name"
          onChange={handleChange}
          value={values.lastName}
          fullWidth
          margin="normal"
          variant="standard"
        />
        <TextField
          name="email"
          label="Email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          value={values.email}
          fullWidth
          margin="normal"
          variant="standard"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default FormUserDetails;
