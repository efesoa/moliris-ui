import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import {Button, Grid, Typography} from "@mui/material";
import {useRef, useState} from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Dataset from "../components/Dataset";
import SimilarityResult from "../components/SimilarityResult";
import InputBox from "../components/InputBox";

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
                sec_sepal_length: null,
                sec_sepal_width: null,
                sec_petal_length: null,
                sec_petal_width: null
            }
        );
    };

    const [compute, setResult] = useState(null)
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
                            <InputBox name={'First Flower'} sepal_l={'Sepal Length'} sepal_w={'Sepal Width'}
                                      petal_l={'Petal Length'} petal_w={'Petal Width'} bx={1} data={data} handleChange={handleChange}/>
                        </Grid>

                        <Grid item>
                            <InputBox name={'Second Flower'} sepal_l={'Sepal Length'} sepal_w={'Sepal Width'}
                                      petal_l={'Petal Length'} petal_w={'Petal Width'} bx={2} data={data} handleChange={handleChange}/>
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
