import React from "react";
import { Grid } from "@mui/material";
import MenuItem from "./MenuItem";
import Email from "./Email";
import ViewEmail from "./ViewEmail";

const MainPage = () => {
    return (
        <div>
            <Grid container item lg={12} spacing={1} sx={{ m: 0, p: 0 }}>
                <Grid item lg={2} sx={12} sm={12} md={4}>
                    <MenuItem />
                </Grid>
                <Grid item lg={4} sx={12} sm={12} md={6}>
                    <Email />
                </Grid>
                <Grid item lg={6} sx={12} sm={12} md={12}>
                    <ViewEmail />
                </Grid>
            </Grid>
        </div>
    );
};

export default MainPage;
