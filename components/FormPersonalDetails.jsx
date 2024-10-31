import React from "react";
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

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  // Handle form submission
  const Continue = (event) => {
    event.preventDefault();
    nextStep();
  };

  const Back = (event) => {
    event.preventDefault();
    prevStep();
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
            Enter Personal Details
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Form */}
      <Box
        component="form"
        onSubmit={Continue}
        sx={{ mt: 3, width: "100%", maxWidth: 400 }}
      >
        <TextField
          name="occupation"
          label="Occupation"
          placeholder="Enter Your Occupation"
          onChange={handleChange}
          value={values.occupation}
          fullWidth
          margin="normal"
          variant="standard"
        />
        <TextField
          name="city"
          label="City"
          placeholder="Enter Your City"
          onChange={handleChange}
          value={values.city}
          fullWidth
          margin="normal"
          variant="standard"
        />
        <TextField
          name="bio"
          label="Bio"
          placeholder="Enter Your Bio"
          onChange={handleChange}
          value={values.bio}
          fullWidth
          margin="normal"
          variant="standard"
        />
        
        {/* Buttons Container */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ flex: 1 }}
          >
            Continue
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={Back}
            sx={{ flex: 1 }}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FormPersonalDetails;
