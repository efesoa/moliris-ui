import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import {Box, FormControl, Grid, TextField, Typography} from "@mui/material";

export default function Similarity() {
    return (
        <div className={styles.container}>
            <Navbar/><br/>

            <Typography variant="h4" align='center'>
                Specify Two Flowers
            </Typography>

            <Grid container spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ my: 3 }}
            >
                <Grid item>
                    <Box boxShadow={7} sx={{ p:2 }} borderRadius={5}>
                        <Typography variant="h5" align='center'>
                            First Flower
                        </Typography>
                        <p>
                            <label>Sepal Length</label><br/>
                            <TextField type='number' size='small' sx={{ width: '50%' }}/>
                        </p>
                        <p>
                            <label>Sepal Width</label><br/>
                            <TextField type='number' size='small' sx={{ width: '50%' }}/>
                        </p>
                        <p>
                            <label>Petal Length</label><br/>
                            <TextField type='number' size='small' sx={{ width: '50%' }}/>
                        </p>
                        <p>
                            <label>Petal Width</label><br/>
                            <TextField type='number' size='small' sx={{ width: '50%' }}/>
                        </p>
                    </Box>
                </Grid>

                <Grid item>
                    <Box boxShadow={7} sx={{ p:2 }} borderRadius={5}>
                        <Typography variant="h5" align='center'>
                            Second Flower
                        </Typography>
                        <p>
                            <label>Sepal Length</label><br/>
                            <TextField type='number' size='small' sx={{ width: '50%' }}/>
                        </p>
                        <p>
                            <label>Sepal Width</label><br/>
                            <TextField type='number' size='small' sx={{ width: '50%' }}/>
                        </p>
                        <p>
                            <label>Petal Length</label><br/>
                            <TextField type='number' size='small' sx={{ width: '50%' }}/>
                        </p>
                        <p>
                            <label>Petal Width</label><br/>
                            <TextField type='number' size='small' sx={{ width: '50%' }}/>
                        </p>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
