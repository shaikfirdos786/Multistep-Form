import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Confirm = ({ values, nextStep, prevStep }) => {
  const { firstName, lastName, email, occupation, city, bio } = values;

  const handleContinue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
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
            Confirm User Data
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <List sx={{ padding: 2, width: "100%" }}>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          width: "100%",
          paddingBottom: 2,
        }}
      >
        <Button color="secondary" variant="contained" onClick={handleBack}>
          Back
        </Button>
        <Button color="primary" variant="contained" onClick={handleContinue}>
          Confirm & Continue
        </Button>
      </Box>
    </Box>
  );
};

export default Confirm;
