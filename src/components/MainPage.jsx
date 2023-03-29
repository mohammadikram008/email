import React from 'react';
import { Grid } from '@mui/material';
import MenuItem from './MenuItem';
import Email from './Email';
import ViewEmail from './ViewEmail';

const MainPage = () => {
  return (
    <div>
      <Grid container item lg={12} style={{ height: '100vh' }} >
        <Grid item lg={2} sx={12} sm={12} md={2} >
          <MenuItem />
        </Grid>
        <Grid item lg={4} sx={12} sm={12} md={4} >
          <Email />
        </Grid>
        <Grid item lg={6} sx={12} sm={12} md={6} >
          <ViewEmail />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
