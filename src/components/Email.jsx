import React from "react";
//mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Divider, Grid } from "@mui/material";
import { indigo } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Email = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMDIxNDQ0LCJpYXQiOjE2Nzk5MzUwNDMsImp0aSI6IjA2ZDNkZTQ4ZTg5NTQ5ZmJhYWEzMjQ0NzU3NzIyN2NiIiwidXNlcl9pZCI6IjZjN2IzY2ExLThjMzItNDc4Ny04MTc5LTBjMDYzNWQ2NzQyMiJ9.oVWfFhQ-xJ3Kk7TZNNSuMKy3Sb9cGKTHFin4aA7-dVg";
    // const header = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    function stringAvatar(name) {
        return {
            children: `${name.split(" ")[0][0]}`
        };
    }
    const handleClick = () => {
        console.log("click");
    };
    // useEffect(() => {
    //   axios
    //     .get(`https://sandbox.notification.pullstream.com/api/`, header)
    //     .then((res) => {
    //       console.log("ResDATA", res.data.results);
    //       setData(res.data.results);
    //     })
    //     .catch((error) => {
    //       console.log("Error", error);
    //     });
    // }, []);
    const alldata = [
        {
            name: "Bitpay",
            subject: "Join KCGI To Earn Huge..",
            contain: "Dear Global bitplayers,We are Delig...",
            date: "02/02/2023"
        },
        {
            name: "Mexi",
            subject: "Experience futures tech...",
            contain: "Dear Global bitplayers,We are Delig...",
            date: "02/02/2023"
        },
        {
            name: "Bitpay",
            subject: "Join KCGI To Earn Huge..",
            contain: "Dear Global bitplayers,We are Delig...",
            date: "02/02/2023"
        },
        {
            name: "Mexi",
            subject: "Experience futures tech...",
            contain: "Dear Global bitplayers,We are Delig...",
            date: "02/02/2023"
        }
    ];
    return (
        <Box
            mt={1}
            sx={{
                borderRadius: "4px",
                border: "1px solid",
                borderColor: "divider",
                height: "90vh"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center"
                }}
            >
                <Checkbox {...label} />
                <ArrowDropDownIcon />
                <Divider />
            </Box>
            <Grid container lg={12} md={12} sm={12} xs={12}>
                {alldata &&
                    alldata.map((item, index) => (
                        <Card
                            sx={{
                                border: "1px solid",
                                m: 0,
                                p: 0,
                                width: "100%",
                                height: 80,
                                borderRadius: "0",
                                borderColor: "divider",
                                ":hover": {
                                    bgcolor: indigo[100]
                                }
                            }}
                            sm={12}
                            lg={12}
                            onClick={handleClick}
                            key={index}
                        >
                            <CardContent sx={{ p: 0, m: 1 }}>
                                <Grid lg={12} container>
                                    <Grid
                                        lg={2}
                                        md={12}
                                        sm={12}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Avatar
                                            // {...stringAvatar(`${item.details.from_email.name}`)}
                                            {...stringAvatar(`${item.name}`)}
                                            sx={{ bgcolor: indigo[800] }}
                                        />
                                    </Grid>
                                    <Grid
                                        lg={10}
                                        md={12}
                                        sm={12}
                                        sx={{ m: 0, p: 0 }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontSize: "0.875rem",
                                                fontWeight: "700"
                                            }}
                                        >
                                            {/* {item.details.from_email.name} */}
                                            {item.name}
                                        </Typography>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            sx={{
                                                color: indigo[800],
                                                justifyContent: "space-between",
                                                fontSize: "0.875rem"
                                            }}
                                        >
                                            <Typography variant="body2">
                                                {item.subject}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: indigo[800]
                                                }}
                                                color="text.secondary"
                                            >
                                                {/* {item.sent_date_time} */}
                                                {item.date}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="h8">
                                            {item.contain}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
            </Grid>
        </Box>
    );
};

export default Email;
