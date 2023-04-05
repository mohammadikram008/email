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
import TurnLeftSharpIcon from "@mui/icons-material/TurnLeftSharp";
import TurnRightSharpIcon from "@mui/icons-material/TurnRightSharp";
import BottomNavigation from "@mui/material/BottomNavigation";
const ViewEmail = ({ content }) => {
    function stringAvatar(name) {
        return {
            children: `${name.split(" ")[0][0]}`
        };
    }
    return (
        <Box mt={1} sx={{ width: "95%", p: 0 }} style={{ height: "80vh" }}>
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
                        <Stack
                            direction="row"
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2
                            }}
                        >
                            <Grid lg={1}>
                                <Avatar
                                    {...stringAvatar("Ikram Khan")}
                                    sx={{ bgcolor: indigo[800] }}
                                />
                            </Grid>
                            <Grid
                                lg={11}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Stack direction="column">
                                    <Typography variant="h8">
                                        {content &&
                                            JSON.stringify(
                                                content.details.from_email
                                                    .username
                                            )}
                                    </Typography>
                                    <Typography variant="body2">
                                        To:
                                        {content &&
                                            JSON.stringify(
                                                content.from_email_alias
                                            )}
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Stack direction="row">
                                        <ReplyIcon
                                            style={{ color: indigo[200] }}
                                        />
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
                                </Stack>
                            </Grid>
                            {/* <Grid lg={3}>
                                
                            </Grid> */}
                        </Stack>
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            p: 5
                        }}
                    >
                        <Grid item lg={12}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontSize: "1rem",
                                    fontWeight: "800"
                                }}
                            >
                                Dear Global Bitpayer
                            </Typography>
                        </Grid>
                        <Grid item lg={12} mt={"2%"}>
                            Depending on your ESLint rules, you might get an
                            error saying that you should use template strings
                            instead of the addition operator. In that case, you
                            can create a variable and use the addition
                            assignment operator
                        </Grid>
                        <Grid item lg={12} mt={"3%"}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontSize: "0.875rem",
                                    fontWeight: "600"
                                }}
                            >
                                Compaign Period:oct28,6PM-NOV-4,6PM(UTC+8)
                            </Typography>
                        </Grid>
                        <Grid item lg={12} mt={"3%"}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontSize: "0.875rem",
                                    fontWeight: "600"
                                }}
                            >
                                Promotion A:Make first trade and share $10,000
                            </Typography>
                        </Grid>
                        <Grid item lg={12} mt={"1%"}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi vel rem ducimus asperiores cum! Rerum,
                            tempora
                        </Grid>
                        <Grid item lg={12} mt={"3%"}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontSize: "0.875rem",
                                    fontWeight: "600"
                                }}
                            >
                                To participate in this promotions A,please click
                                on the [JOIN NOW] botton below
                            </Typography>
                        </Grid>
                    </Box>
                    <Grid item lg={12} mb={4} container>
                        {/* <Grid lg={1}></Grid> */}
                        <Grid lg={4} sx={{}}>
                            <BottomNavigation showLabels>
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    sx={{ borderRadius: 10, color: grey, m: 1 }}
                                >
                                    <TurnLeftSharpIcon />
                                    Reply
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    sx={{ borderRadius: 10, color: grey, m: 1 }}
                                >
                                    <TurnRightSharpIcon />
                                    Forword
                                </Button>
                            </BottomNavigation>
                        </Grid>
                        <Grid lg={8}></Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ViewEmail;
