import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import Dataset from "../components/Dataset";
import Footer from "../components/Footer";
import {useRef, useState} from "react";
import axios from "axios";
import KSimilarObjectResult from "../components/KSimilarObjectResult";
import InputBox from "../components/InputBox";
import * as React from "react";

export default function KSimilarObject() {
    const [data, setData] = useState({
        sepal_length: null,
        sepal_width: null,
        petal_length: null,
        petal_width: null,
        k: null,
    });

    const handleChange = (e: { target: { value: string; name: any; }; }) => {
        const value = parseFloat(e.target.value);
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const formClear: any = useRef();
    const handleReset = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        formClear.current.reset();
        setData(
            {
                sepal_length: null,
                sepal_width: null,
                petal_length: null,
                petal_width: null,
                k: null,
            }
        );
    };

    const [compute, setResult] = useState(null)
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await axios
            .post(`http://127.0.0.1:8000/similar_objects`, data)
            .then((response) => {
                const similarObj = response.data;
                setResult(similarObj);
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

    const [dataset, setDataset] = useState(null)
    const showDataset = () => {
        axios.get('http://127.0.0.1:8000/dataset')
            .then((response) => {
                const irisset = response.data;
                setDataset(irisset);
            })
    }

    return (
        <div className={styles.container}>
            <Navbar>children={1}</Navbar><br/>

            <Typography variant="h4" align='center'>
                Specify a Flower
            </Typography>

            <form onSubmit={handleSubmit} method="post" ref={formClear}>
                <Grid container spacing={2}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      sx={{ my: 3 }}
                >
                    <Grid item>
                        <InputBox name={'Flower'} sepal_l={'Sepal Length'} sepal_w={'Sepal Width'}
                                  petal_l={'Petal Length'} petal_w={'Petal Width'} bx={1} data={data} handleChange={handleChange}/>
                    </Grid>

                    <Grid item>
                        <Box boxShadow={7} sx={{ p:2 }} borderRadius={5}>
                            <Typography variant="h5" align='center'>
                                Number of Nearest Neighbors(K)
                            </Typography>
                            <p>
                                <label>K</label><br/>
                                <TextField type='number' name='k' value={data.k} size='small'
                                           sx={{ width: '50%' }} onChange={handleChange}
                                           inputProps={{ min: 1, step: 1, max: 50, required: 'true' }}/>
                            </p>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item>
                        <Button type="submit" variant="contained">Compute</Button>
                    </Grid>
                    <Grid item>
                        <Button type="reset" variant="contained"
                                sx={{ color: '#808080', bgcolor: 'white',
                                    ':hover': { bgcolor: 'rgba(234,229,229,0.38)' } }}
                                onClick={handleReset}
                        >
                            Clear
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <KSimilarObjectResult compute={compute} />

            <Button onClick={showDataset}>View DataSet</Button>
            <Dataset dataset={dataset}/>

            <Footer/>
        </div>
    )
}
