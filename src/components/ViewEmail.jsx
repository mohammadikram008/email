import React from "react";
//mUI
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deepOrange } from "@mui/material/colors";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";

const ViewEmail = () => {
  function stringAvatar(name) {
    return {
      // sx: {
      //   bgcolor: stringToColor(name),
      // },
      children: `${name.split(" ")[0][0]}`,
    };
  }
  return (
    <div className="main">
      <Grid lg={12} container spacing={2}>
        <Grid lg={12} md={12} item className="heading">
          Join KCGI To Earn Huge rewards!
        </Grid>
        <Grid lg={12} md={12} item className="view-email">
          <Grid item lg={12}>
            <Stack direction="row" spacing={2}>
              <Grid lg={4}>
                {/* <Avatar>H</Avatar> */}
                <Avatar
                  {...stringAvatar("Ikram Khan")}
                  sx={{ bgcolor: deepOrange[500] }}
                />
                {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
              </Grid>
              <Grid lg={4}>
                <Typography
                  variant="h8"
                  component="div"
                  className="veiwmail-heading"
                >
                  ikram notificationpromo.bitpay.com
                </Typography>

                <Typography variant="body2">To:umer@pullstream.com</Typography>
              </Grid>
              <Grid lg={4}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  date
                </Typography>
              </Grid>
            </Stack>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="h5" component="div" className="veiwmail-name">
              Dear Global Bitpayer
            </Typography>
          </Grid>
          <Grid item lg={12}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel
            rem ducimus asperiores cum! Rerum, tempora mollitia quasi harum esse
            possimus? Ratione, accusamus ipsum dolores aliquid quia placeat
            omnis vel.
          </Grid>
          <Grid item lg={12}>
            <Button variant="outlined">
              {" "}
              <ShortcutOutlinedIcon /> Reply
            </Button>
            <Button variant="outlined">
              <ShortcutOutlinedIcon />
              Forword
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewEmail;
