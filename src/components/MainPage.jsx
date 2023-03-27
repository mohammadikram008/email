import React from 'react';
import { Grid } from '@mui/material';
import ManuItem from './ManuItem';
import Email from './Email';
import ViewEmail from './ViewEmail';

const MainPage = () => {
  return (
    <div>
      <Grid container lg={12} justifyContent="center" className="m-auto">
        <Grid item lg={2} sx={12} sm={12} md={2} style={{ border: '1px' }}>
          <ManuItem />
        </Grid>
        <Grid item lg={4} sx={12} sm={12} md={4} style={{ background: 'blue' }}>
          <Email />
        </Grid>
        <Grid item lg={6} sx={12} sm={12} md={6} style={{ background: 'secondry' }}>
          <ViewEmail />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
