import React from 'react';
//MUI
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SendIcon from '@mui/icons-material/Send';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Grid, Button } from '@mui/material';

const MenuItem = () => {
  return (
    <div className="Menu-item">
      <Grid container lg={12} md={12} sm={12} xs={12} item spacing={4}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Button variant="outlined">
            <AddOutlinedIcon /> New Mail
          </Button>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <InboxIcon /> Inbox
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <StarOutlineIcon /> Starred
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <SendIcon /> SendItem
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <FileOpenOutlinedIcon /> Draft
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <FolderOutlinedIcon /> Junk mail
        </Grid>
      </Grid>
    </div>
  );
};

export default MenuItem;
