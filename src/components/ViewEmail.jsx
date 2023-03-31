import React from "react";
//mUI
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { indigo, grey } from "@mui/material/colors";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import Box from "@mui/material/Box";
const ViewEmail = () => {
    function stringAvatar(name) {
        return {
            children: `${name.split(" ")[0][0]}`
        };
    }
    return (
        <Box mt={1} sx={{ mr: 4 }} style={{ height: "80vh" }}>
            <Box
                sx={{
                    borderRadius: "4px",
                    border: "1px solid",
                    borderColor: "divider"
                }}
            >
                <Typography sx={{ m: 0.5, fontSize: "0.875rem" }}>
                    Join KCGI To Earn Huge rewards!
                </Typography>
            </Box>
            <Box
                sx={{
                    borderRadius: "4px",
                    border: "1px solid",
                    borderColor: "divider",
                    height: "83vh"
                }}
                mt={1}
            >
                <Grid lg={12} md={12} item container>
                    <Grid item lg={12}>
                        <Stack direction="row" sx={{ p: 2 }}>
                            <Grid lg={1}>
                                <Avatar
                                    {...stringAvatar("Ikram Khan")}
                                    sx={{ bgcolor: indigo[800] }}
                                />
                            </Grid>
                            <Grid lg={8}>
                                <Typography variant="h8">
                                    ikram notificationpromo.bitpay.com
                                </Typography>
                                <Typography variant="body2">
                                    To:umer@pullstream.com
                                </Typography>
                            </Grid>
                            <Grid lg={3}>
                                <Stack direction="row">
                                    <ReplyIcon style={{ color: indigo[200] }} />
                                    <ReplyAllIcon
                                        style={{ color: indigo[200] }}
                                    />
                                    <ShortcutOutlinedIcon
                                        style={{ color: indigo[200] }}
                                    />
                                    ...
                                </Stack>
                                <Typography
                                    color="text.secondary"
                                    sx={{
                                        fontSize: "0.875rem"
                                    }}
                                >
                                    Mon 02/02/2023
                                </Typography>
                            </Grid>
                        </Stack>
                    </Grid>
                    <Box
                        sx={{
                            p: 6,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Grid item lg={12}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontSize: "0.875rem",
                                    fontWeight: "700"
                                }}
                            >
                                Dear Global Bitpayer
                            </Typography>
                        </Grid>
                        <Grid item lg={12} mt={2}>
                            Depending on your ESLint rules, you might get an
                            error saying that you should use template strings
                            instead of the addition operator. In that case, you
                            can create a variable and use the addition
                            assignment operator
                        </Grid>
                        <Grid item lg={12} mt={2}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontSize: "0.875rem",
                                    fontWeight: "700"
                                }}
                            >
                                Compaign Period:oct28,6PM-NOV-4,6PM(UTC+8)
                            </Typography>
                        </Grid>
                        <Grid item lg={12} mt={2}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontSize: "0.875rem",
                                    fontWeight: "700"
                                }}
                            >
                                Promotion A:Make first trade and share $10,000
                            </Typography>
                        </Grid>
                        <Grid item lg={12} mt={2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi vel rem ducimus asperiores cum! Rerum,
                            tempora
                        </Grid>
                        <Grid item lg={12} mt={2}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontSize: "0.875rem",
                                    fontWeight: "700"
                                }}
                            >
                                To participate in this promotions A,please click
                                on the [JOIN NOW] botton below
                            </Typography>
                        </Grid>
                    </Box>
                    <Grid item lg={12} mb={2} container>
                        <Grid lg={1}></Grid>
                        <Grid lg={7} sx={{ m: 1 }}>
                            <Button
                                variant="outlined"
                                color="inherit"
                                sx={{ borderRadius: 10, color: grey, m: 1 }}
                            >
                                {" "}
                                <ReplyIcon /> Reply
                            </Button>
                            <Button
                                variant="outlined"
                                color="inherit"
                                sx={{ borderRadius: 10, color: grey }}
                            >
                                <ShortcutOutlinedIcon />
                                Forword
                            </Button>
                        </Grid>
                        <Grid lg={2}></Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ViewEmail;
