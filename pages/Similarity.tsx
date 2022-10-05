import Navbar from "../components/Navbar";
import {Button, Grid, Typography} from "@mui/material";
import {useRef, useState} from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Dataset from "../components/Dataset";
import SimilarityResult from "../components/SimilarityResult";
import InputBox from "../components/InputBox";
import * as React from "react";
import Image from "next/image";

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
        <div>
            <Navbar>children={1}</Navbar>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                sx={{  background: 'url(/static/images/similarity.jpg)',backgroundPosition: 'bottom', height: 500 }}
            >
                <Grid item>
                    <Typography variant="h2" sx={{ color: '#ffffff' }}>SIMILARITY</Typography>
                </Grid>
            </Grid>

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ paddingTop: 5, paddingBottom: 3 }}
            >
                <Grid item>
                    <Typography variant="h5" sx={{ color: '#3B722F' }}>HINT</Typography>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <Grid item sx={{ paddingTop: 1 }}>
                            <Image src={'/static/images/hint.png'} width={250} height={200}/>
                        </Grid>
                        <Grid item sx={{ px: 3, paddingTop: 1 }}>
                            <Typography>
                                {/*<Image src={'/static/images/dot.png'} width={5} height={5} style={{ paddingBottom: 3, paddingRight: 1 }}/>*/}
                                Measure the length and width of the flower petal or copy from a dataset.
                            </Typography><br/>
                            <Typography>
                                {/*<Image src={'/static/images/dot.png'} width={5} height={5} style={{ paddingBottom: 3, paddingRight: 1 }}/>*/}
                                               Measure the length and width of the flower sepal or copy from a dataset.
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

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
                        <Button type="submit" variant="contained" size={'large'} sx={{ backgroundColor: '#5D37E0' }}>Compute</Button>
                    </Grid>
                    <Grid item>
                        <Button type="reset" variant="contained" size={'large'}
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
            <Grid container justifyContent="center" alignItems="center" sx={{ paddingTop: 5, paddingBottom: 3 }}>
                <Button onClick={showDataset} variant="outlined" size={'large'} sx={{ height: 50, borderRadius: 2,
                    color: '#5D37E0', borderColor: '#5D37E0'  }}>View DataSet</Button>
            </Grid>
            <Dataset dataset={dataset}/>

            <Footer/>
        </div>
    )
}
