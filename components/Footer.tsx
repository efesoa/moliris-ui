import {Box, Divider, Grid} from "@mui/material";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as React from "react";
import styles from "../styles/Home.module.css";


export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Grid container
                  justifyContent="space-around"
                  alignItems="center"
                  sx={{ background: '#FFFFFF', color: '#808080' }}
            >
                <Grid item>
                    <Typography variant="h6">
                        <Link href='/'  >
                            <a>Moliris</a>
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography>
                        ©2022 Moliris. All rights reserved.
                    </Typography>
                </Grid>
                <Grid item>
                    <Link href='https://www.linkedin.com/in/molinge-teddy-8497b41b3'>
                        <a><LinkedInIcon /></a>
                    </Link>
                </Grid>
            </Grid>
        </footer>
    );
}