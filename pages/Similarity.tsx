import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {useRef, useState} from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Dataset from "../components/Dataset";
import SimilarityResult from "../components/SimilarityResult";

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
        const value = parseFloat(e.target.value);
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const formClear = useRef();
    const handleReset = e => {
        e.preventDefault();
        formClear.current.reset();
        setData(
            {
                sepal_length: null,
                sepal_width: null,
                petal_length: null,
                petal_width: null,
                sec_sepal_length: null,
                sec_sepal_width: null,
                sec_petal_length: null,
                sec_petal_width: null
            }
        );
    };

    const [compute, setResult] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post(`http://127.0.0.1:8000/measurements`, data)
            .then((response) => {
                const similarity = response.data;
                setResult(similarity);
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
            <Navbar/><br/>

            <Typography variant="h4" align='center'>
                Specify Two Flowers
            </Typography>

            <form onSubmit={handleSubmit} method="post" ref={formClear}>
                <Grid container spacing={2}
                      direction="row"
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
                                    <TextField type='number' name='sepal_length' value={data.sepal_length} size='small'
                                               sx={{ width: '50%' }} onChange={handleChange}
                                               inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }} />
                                </p>
                                <p>
                                    <label>Sepal Width</label><br/>
                                    <TextField type='number' name='sepal_width' value={data.sepal_width} size='small'
                                               sx={{ width: '50%' }} onChange={handleChange}
                                               inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                                </p>
                                <p>
                                    <label>Petal Length</label><br/>
                                    <TextField type='number' name='petal_length' value={data.petal_length} size='small'
                                               sx={{ width: '50%' }} onChange={handleChange}
                                               inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                                </p>
                                <p>
                                    <label>Petal Width</label><br/>
                                    <TextField type='number' name='petal_width' value={data.petal_width} size='small'
                                               sx={{ width: '50%' }} onChange={handleChange}
                                               inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
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
                                               sx={{ width: '50%' }} onChange={handleChange}
                                               inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                                </p>
                                <p>
                                    <label>Sepal Width</label><br/>
                                    <TextField type='number' name='sec_sepal_width' value={data.sec_sepal_width} size='small'
                                               sx={{ width: '50%' }} onChange={handleChange}
                                               inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                                </p>
                                <p>
                                    <label>Petal Length</label><br/>
                                    <TextField type='number' name='sec_petal_length' value={data.sec_petal_length} size='small'
                                               sx={{ width: '50%' }} onChange={handleChange}
                                               inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
                                </p>
                                <p>
                                    <label>Petal Width</label><br/>
                                    <TextField type='number' name='sec_petal_width' value={data.sec_petal_width} size='small'
                                               sx={{ width: '50%' }} onChange={handleChange}
                                               inputProps={{ min: 0.1, step: 0.1, max: 10, required: 'true' }}/>
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

            <SimilarityResult compute={compute} />

            <Button onClick={showDataset}>View DataSet</Button>
            <Dataset dataset={dataset}/>

            <Footer/>
        </div>
    )
}
