import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import {Box, Button, FormControl, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import Footer from "../components/Footer";

export default function Similarity() {
    const [data, setData] = useState({
        sepal_length: null,
        sepal_width: null,
        petal_length: null,
        petal_width: null,
        sec_sepal_length: null,
        sec_sepal_width: null,
        sec_petal_length: null,
        sec_petal_width: null
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            sepal_length: data.sepal_length,
            sepal_width: data.sepal_width,
            petal_length: data.petal_length,
            petal_width: data.petal_width,
            sec_sepal_length: data.sec_sepal_length,
            sec_sepal_width: data.sec_sepal_width,
            sec_petal_length: data.sec_petal_length,
            sec_petal_width: data.sec_petal_width
        };
        await axios
            .post("http://127.0.0.1:8000/measurements", userData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });
    };

    return (
        <div className={styles.container}>
            <Navbar/><br/>

            <Typography variant="h4" align='center'>
                Specify Two Flowers
            </Typography>

            <Grid container spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ my: 3 }}
            >
                <form onSubmit={handleSubmit} method="post">
                    <Grid item>
                        <Box boxShadow={7} sx={{ p:2 }} borderRadius={5}>
                            <Typography variant="h5" align='center'>
                                First Flower
                            </Typography>
                            <p>
                                <label>Sepal Length</label><br/>
                                <TextField type='number' name='sepal_length' value={data.sepal_length} size='small'
                                           sx={{ width: '50%' }} onChange={handleChange}/>
                            </p>
                            <p>
                                <label>Sepal Width</label><br/>
                                <TextField type='number' name='sepal_width' value={data.sepal_width} size='small'
                                           sx={{ width: '50%' }} onChange={handleChange}/>
                            </p>
                            <p>
                                <label>Petal Length</label><br/>
                                <TextField type='number' name='petal_length' value={data.petal_length} size='small'
                                           sx={{ width: '50%' }} onChange={handleChange}/>
                            </p>
                            <p>
                                <label>Petal Width</label><br/>
                                <TextField type='number' name='petal_width' value={data.petal_width} size='small'
                                           sx={{ width: '50%' }} onChange={handleChange}/>
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
                                <TextField type='number' name='sec_sepal_length' value={data.sec_sepal_length} size='small'
                                           sx={{ width: '50%' }} onChange={handleChange}/>
                            </p>
                            <p>
                                <label>Sepal Width</label><br/>
                                <TextField type='number' name='sec_sepal_width' value={data.sec_sepal_width} size='small'
                                           sx={{ width: '50%' }} onChange={handleChange}/>
                            </p>
                            <p>
                                <label>Petal Length</label><br/>
                                <TextField type='number' name='sec_petal_length' value={data.sec_petal_length} size='small'
                                           sx={{ width: '50%' }} onChange={handleChange}/>
                            </p>
                            <p>
                                <label>Petal Width</label><br/>
                                <TextField type='number' name='sec_petal_width' value={data.sec_petal_width} size='small'
                                           sx={{ width: '50%' }} onChange={handleChange}/>
                            </p>
                        </Box>
                    </Grid>

                    <Button type="submit" variant="contained">Compute</Button>
                </form>
            </Grid>

            <Footer/>
        </div>
    )
}
