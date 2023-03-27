import React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SendIcon from '@mui/icons-material/Send';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Grid } from '@mui/material';
const ManuItem = () => {
  return (
    <div>
      <Grid container lg={12}>
        <Grid item lg={12}>
          <AddOutlinedIcon /> Add new
        </Grid>
        <Grid item lg={12}>
          <InboxIcon /> Inbox
        </Grid>
        <Grid item lg={12}>
          <StarOutlineIcon /> Stared
        </Grid>
        <Grid item lg={12}>
          <SendIcon /> SendItem
        </Grid>
        <Grid item lg={12}>
          <FileOpenOutlinedIcon /> Draft
        </Grid>
        <Grid item lg={12}>
          <FolderOutlinedIcon /> Junk mail
        </Grid>
      </Grid>
    </div>
  );
};

export default ManuItem;
