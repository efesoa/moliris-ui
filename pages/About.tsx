import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as React from "react";
import styles from '../styles/Home.module.css'
import {Grid, Typography} from "@mui/material";
import Image from "next/image";

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
            <Grid container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="flex-start"
                  sx={{ py: 3 }}
            >
                <Grid item>
                    <Image src={'/static/images/about-icons.png'} width={200} height={400} />
                </Grid>
                <Grid item sx={{ width: 550 }} className={styles.container}>
                    <Typography variant="h4"><b>Computing Object-Object Similarities using data points.</b></Typography><br/>
                    <Typography>We quantify the similarity between two objects using similarity metric base on UCI Machine
                        Learning dataset. Get real value predictions of data points using powerful Machine Learning algorithms.
                        Filter similar data points for easy access.</Typography>
                </Grid>
            </Grid>

            <Footer />
        </div>
    )
}
