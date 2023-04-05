import React, { useState, useEffect } from "react";
import axios from "axios";
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
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Email = ({ setContent }) => {
    const [data, setData] = useState([]);
    const [singledata, setSingledata] = useState([]);
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNzExNjE0LCJpYXQiOjE2ODA2MjUyMTIsImp0aSI6Ijk4OTYwY2Y5MTcyZDQ1MTZhMTg3NDM5ZmE2OTE2ODA4IiwidXNlcl9pZCI6IjZjN2IzY2ExLThjMzItNDc4Ny04MTc5LTBjMDYzNWQ2NzQyMiJ9.O8Tx9w9q3DdxWVCQPvNRfwbzzqQTDgyXhqkjn1zDC-8";
    const header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    useEffect(() => {
        axios
            .get(
                `https://sandbox.notification.pullstream.com/api/email-templates`,
                header
            )
            .then((res) => {
                console.log("ResDATA", res.data.results);
                setData(res.data.results);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }, []);

    function stringAvatar(name) {
        return {
            children: `${name.split(" ")[0][0]}`
        };
    }
    const handleClick = (prop) => {
        console.log("prop", prop);
        setContent(prop);
    };
    // const alldata = [
    //     {
    //         name: "Bitpay",
    //         subject: "Join KCGI To Earn Huge..",
    //         contain: "Dear Global bitplayers,We are Delig...",
    //         date: "02/02/2023"
    //     },
    //     {
    //         name: "Mexi",
    //         subject: "Experience futures tech...",
    //         contain: "Dear Global bitplayers,We are Delig...",
    //         date: "02/02/2023"
    //     },
    //     {
    //         name: "Bitpay",
    //         subject: "Join KCGI To Earn Huge..",
    //         contain: "Dear Global bitplayers,We are Delig...",
    //         date: "02/02/2023"
    //     },
    //     {
    //         name: "Mexi",
    //         subject: "Experience futures tech...",
    //         contain: "Dear Global bitplayers,We are Delig...",
    //         date: "02/02/2023"
    //     }
    // ];
    return (
        <Box
            mt={1}
            sx={{
                borderRadius: "4px",
                border: "1px solid",
                borderColor: "divider",
                height: "85vh"
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
                <Paper
                    sx={{
                        height: "85vh",
                        overflow: "scroll",
                        overflowX: "hidden"
                    }}
                >
                    <List>
                        {data &&
                            data.map((item, index) => (
                                <Card
                                    sx={{
                                        border: "1px solid",
                                        m: 0,
                                        p: 0,
                                        width: "100%",
                                        height: "80%",
                                        borderRadius: "0",
                                        borderColor: "divider",
                                        ":hover": {
                                            bgcolor: indigo[100]
                                        }
                                    }}
                                    sm={12}
                                    lg={12}
                                    md={12}
                                    onClick={() => handleClick(item)}
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
                                                    {...stringAvatar(
                                                        `${item.details.from_email.display_name}`
                                                    )}
                                                    sx={{
                                                        bgcolor: indigo[800]
                                                    }}
                                                    // {...stringAvatar(`${item.name}`)}
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
                                                    {
                                                        item.details.from_email
                                                            .display_name
                                                    }
                                                    {/* {item.name} */}
                                                </Typography>
                                                <Stack
                                                    direction="row"
                                                    spacing={2}
                                                    sx={{
                                                        color: indigo[800],
                                                        justifyContent:
                                                            "space-between",
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
                                                        {item.created_at}
                                                        {/* {item.date} */}
                                                    </Typography>
                                                </Stack>
                                                <Typography variant="h8">
                                                    {item.description}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            ))}
                    </List>
                </Paper>
            </Grid>
        </Box>
    );
};

export default Email;
