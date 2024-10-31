import React from 'react';
import { AppBar, Toolbar, Typography, Box, Dialog } from '@mui/material';

const Success = () => {
  return (
    <Dialog open={true} fullWidth maxWidth="sm">
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6">Success</Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          p: 3,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Thank You For Your Submission
        </Typography>
        <Typography variant="body1">
          You will get an email with further instructions.
        </Typography>
      </Box>
    </Dialog>
  );
};

export default Success;
