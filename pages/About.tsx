import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as React from "react";
import {Grid, Typography} from "@mui/material";

export default function About() {
    return (
        <div>
            <Navbar>children={1}</Navbar>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{  background: 'url(/static/images/about.jpg)',backgroundPosition: 'top', height: 500 }}
            >
                <Grid item>
                    <Typography variant="h2" sx={{ color: '#ffffff' }}>ABOUT US</Typography>
                </Grid>
            </Grid>

            <Footer />
        </div>
    )
}
