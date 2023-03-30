import React from "react";
//mUI
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import Box from "@mui/material/Box";
const ViewEmail = () => {
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  }
  return (
    <Box mt={1} sx={{ mr: 4 }} style={{ height: "80vh" }}>
      <Box sx={{
        "--Grid-borderWidth": "1px",
        borderRadius: "4px",
        borderTop: "var(--Grid-borderWidth) solid",
        borderLeft: "var(--Grid-borderWidth) solid",
        borderRight: "var(--Grid-borderWidth) solid",
        borderBottom: "var(--Grid-borderWidth) solid",
        borderColor: "divider",
      }}>
        Join KCGI To Earn Huge rewards!
      </Box>
      <Box sx={{
        "--Grid-borderWidth": "1px",
        borderRadius: "4px",
        borderTop: "var(--Grid-borderWidth) solid",
        borderLeft: "var(--Grid-borderWidth) solid",
        borderRight: "var(--Grid-borderWidth) solid",
        borderBottom: "var(--Grid-borderWidth) solid",
        borderColor: "divider",
      }} mt={1}>
        <Grid lg={12} md={12} item >
          <Grid item lg={12}>
            <Stack direction="row" sx={{ p: 2 }}>
              <Grid lg={2}>
                <Avatar
                  {...stringAvatar("Ikram Khan")}
                  sx={{ bgcolor: indigo[500] }}
                />
              </Grid>
              <Grid lg={8}>
                <Typography
                  variant="h8"
                  component="div"
                  className="veiwmail-heading"
                >
                  ikram notificationpromo.bitpay.com
                </Typography>
                <Typography variant="body2">To:umer@pullstream.com</Typography>
              </Grid>
              <Grid lg={2}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  02/02/2033
                </Typography>
              </Grid>
            </Stack>
          </Grid>
          <Box sx={{ p: 4}}>
            <Grid item lg={12} mt={2}>
              <Typography variant="h5" component="div" >
                Dear Global Bitpayer
              </Typography>
            </Grid>
            <Grid item lg={12} mt={2}>
              Depending on your ESLint rules, you might get an error saying that you should use template strings instead of the addition operator. In that case, you can create a variable and use the addition assignment operator 
            </Grid>
            <Grid item lg={12} mt={2}>
              <Typography variant="h6" component="div" >
                Compaign Period:oct28,6PM-NOV-4,6PM(UTC+8)
              </Typography>
            </Grid>
            <Grid item lg={12} mt={2}>
              <Typography variant="h6" component="div" >
                Promotion A:Make first trade and share $10,000
              </Typography>
            </Grid>
            <Grid item lg={12} mt={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel
              rem ducimus asperiores cum! Rerum, tempora
            </Grid>
            <Grid item lg={12} mt={2}>
              <Typography variant="h6" component="div" >
                To participate in this promotions A,please click on the [JOIN NOW] botton below
              </Typography>
            </Grid>
          </Box>
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
      </Box>
    </Box >
  );
};

export default ViewEmail;
