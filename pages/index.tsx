import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import * as React from "react";
import Footer from "../components/Footer";
import Cards from "../components/Cards"
import {Button, Grid, Typography} from "@mui/material";
import BenefitBox from "../components/BenefitBox";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import GetStartedCard from "../components/GetStartedCard";
import CarouselSlider from "../components/CarouselSlider";
import Image from 'next/image'

const theme = createTheme();

theme.typography.h5 = {
  fontSize: '2.5rem',
  '@media (min-width:1000px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.8rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3.1rem',
  },
};

interface specie {
  image: string;
  name: string;
  description: string
}

interface work {
  width: number;
  height: number;
  border: number;
  image: string;
  name: string;
  description: string
}

const specieType: readonly specie[] = [
  {image: '/static/images/white_iris.jpg', name: 'Bearded Iris', description: 'Bearded Iris (Iris germanica) is an evergreen perennial rhizome found in well-drained soil from Southern and Central Europe.'},
  {image: '/static/images/purple.jpg', name: 'Aril Iris', description: 'Arils, or aril irises, are wild bearded iris species found in semi-arid to desert climates from Central Asia to the Middle East.'},
  {image: '/static/images/1.jpg', name: 'Beardless Iris', description: 'Beardless Iris is iris without a beard found from the southern areas of the temperate zone up to the edges of the frigid arctic.'}
]

const benefit: readonly work[] = [
  {width: 200, height: 240, border: 0, image: '/static/images/collect.png', name: 'Data Collection', description: 'Collecting, measuring and analyzing accurate insights for research.'},
  {width: 200, height: 240, border: 0, image: '/static/images/entry.png', name: 'Data Entry', description: 'Get real value predictions of data points using powerful machine learning algorithms.'},
  {width: 200, height: 240, border: 0, image: '/static/images/compute.png', name: 'Computing', description: 'Quantify the similarity between two objects.'},
  {width: 200, height: 240, border: 0, image: '/static/images/result.png', name: 'Result', description: 'Organize your data into categories that makes it easy to retrieve, sort and store for future use.'} //Data classification is the process of organizing data into categories that make it easy to retrieve, sort and store for future use
]

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Moliris</title>
        <meta name="description" content="Compute Similarities of objects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Grid container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{  backgroundColor: '#F4F8FF' }}
        >
          <Grid item className={styles.container}>
            <Grid sx={{ display: { xs: 'inherit', sm: 'inherit', md: 'none', lg: 'none' }, paddingTop: 14 }}>
            <ThemeProvider theme={theme}>
              <Typography color={'#5D37E0'} variant={'h5'}>Know what you have,</Typography>
              <Typography color={'#5D37E0'} variant={'h5'}>Feel the power</Typography>
              <Typography>Perform iris flower similarities check using similarity metrics based on measurements</Typography>
            </ThemeProvider>
            <p><Button variant="contained" sx={{ background: 'linear-gradient(315deg, #5d37e0 30%, #8973ff 94%)',
              bgcolor: '#8973ff', textTransform: 'none' }} size="large" ><b>Get Started</b></Button></p>
            </Grid>
          </Grid>
        </Grid>

        <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{  backgroundColor: '#F4F8FF', py: 4 }}
        >
          <Grid item>
            <Navbar>children={1}</Navbar>
          </Grid>

          <Grid item ><br/>
            <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'inherit', lg: 'inherit' } }}>
              <ThemeProvider theme={theme}>
              <Typography color={'#5D37E0'} variant={'h5'}>Know what you have,</Typography>
              <Typography color={'#5D37E0'} variant={'h5'}>Feel the power</Typography>
              <Typography>Perform iris flower similarities check using similarity</Typography>
              <Typography >metrics based on measurements</Typography>
              </ThemeProvider>
              <p><Button variant="contained" sx={{ background: 'linear-gradient(315deg, #5d37e0 30%, #8973ff 94%)',
                bgcolor: '#8973ff', textTransform: 'none' }} size="large" ><b>Get Started</b></Button></p>
            </Grid>
          </Grid>
          <Grid item className={styles.container} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'none' } }}>
            <Image alt={'Iris Flower'} src={'/static/images/iris-home.png'} width={450} height={400}/>
          </Grid>
          <Grid item className={styles.container} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' } }}>
            <Image alt={'Iris Flower'} src={'/static/images/iris-home.png'} width={550} height={500}/>
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
            <Typography variant="caption" sx={{ color: '#333436' }}>WHAT WE OFFER</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" sx={{ color: '#000000' }}>Our Features</Typography>
          </Grid>
        </Grid>

        <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'inherit', lg: 'inherit' } }}>
          <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
          >
            <Grid item sx={{ px: 9, paddingBottom: 4 }}>
              <BenefitBox width={340} height={340} border={1} image={'/static/images/dataset.png'} name={'UCI Dataset'}
                          description={'Collection of databases, domain theories, and data generators from the UCI Machine Learning Repository for empirical analysis of machine learning algorithms.'}
                          bLeftRadius={8} bRightRadius={100} tLeftRadius={8} tRightRadius={8}/>
            </Grid>
            <Grid item sx={{ px: 9, paddingBottom: 4  }}>
              <BenefitBox width={340} height={340} border={1} image={'/static/images/predictive-model.png'} name={'Prediction'}
                          description={'Get real value predictions of data points using powerful machine learning algorithms.'}
                          bLeftRadius={100} bRightRadius={8} tLeftRadius={8} tRightRadius={8}/>
            </Grid>
          </Grid>
          <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
          >
            <Grid item sx={{ px: 9, paddingBottom: 4 }}>
              <BenefitBox width={340} height={340} border={1} image={'/static/images/metric.png'} name={'Similarity Metric'}
                          description={'Quantify the similarity between two objects.'} bLeftRadius={8} bRightRadius={8} tLeftRadius={8} tRightRadius={100}/>
            </Grid>
            <Grid item sx={{ px: 9, paddingBottom: 5 }}>
              <BenefitBox width={340} height={340} border={1} image={'/static/images/classifier.png'} name={'Data Classifier'}
                          description={'Organize your data into categories that makes it easy to retrieve, sort and store for future use.'}
                          bLeftRadius={8} bRightRadius={8} tLeftRadius={100} tRightRadius={8}/>
            </Grid>
          </Grid>
        </Grid>

        <Grid sx={{ display: { xs: 'inherit', sm: 'inherit', md: 'none', lg: 'none' } }}>
          <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
          >
            <Grid item sx={{ px: 9, paddingBottom: 4 }}>
              <BenefitBox width={300} height={340} border={1} image={'/static/images/dataset.png'} name={'UCI Dataset'}
                          description={'Collection of databases, domain theories, and data generators from the UCI Machine Learning Repository for empirical analysis of machine learning algorithms.'}
                          bLeftRadius={8} bRightRadius={100} tLeftRadius={8} tRightRadius={8}/>
            </Grid>
            <Grid item sx={{ px: 9, paddingBottom: 4  }}>
              <BenefitBox width={300} height={340} border={1} image={'/static/images/predictive-model.png'} name={'Prediction'}
                          description={'Get real value predictions of data points using powerful machine learning algorithms.'}
                          bLeftRadius={100} bRightRadius={8} tLeftRadius={8} tRightRadius={8}/>
            </Grid>
          </Grid>
          <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
          >
            <Grid item sx={{ px: 5, paddingBottom: 4 }}>
              <BenefitBox width={300} height={340} border={1} image={'/static/images/metric.png'} name={'Similarity Metric'}
                          description={'Quantify the similarity between two objects.'} bLeftRadius={8} bRightRadius={8} tLeftRadius={8} tRightRadius={100}/>
            </Grid>
            <Grid item sx={{ px: 5, paddingBottom: 5 }}>
              <BenefitBox width={300} height={340} border={1} image={'/static/images/classifier.png'} name={'Data Classifier'}
                          description={'Organize your data into categories that makes it easy to retrieve, sort and store for future use.'}
                          bLeftRadius={8} bRightRadius={8} tLeftRadius={100} tRightRadius={8}/>
            </Grid>
          </Grid>
        </Grid>

        <Grid
            container
            sx={{ width: '100%', bgcolor: '#F3F0F0' }}
        >
          <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ paddingTop: 5 }}
          >
            <Grid item>
              <Typography variant="caption" sx={{ color: '#b09eef' }}>STEP BY STEP</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" sx={{ color: '#603BE2' }}>HOW IT WORKS</Typography>
            </Grid>
          </Grid>

          <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="baseline"
              sx={{ paddingBottom: 5 }}
          >
            {benefit.map((ben) => {
              return (
                  <Grid item sx={{ px: 2 }} key={ben.name}>
                    <BenefitBox width={ben.width} height={ben.height} border={ben.border} image={ben.image} name={ben.name}
                                description={ben.description} bLeftRadius={0} bRightRadius={0} tLeftRadius={0} tRightRadius={0} />
                  </Grid>
              )
            })}
          </Grid>
        </Grid>

        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            sx={{ background: 'linear-gradient( #eaeaea 60%, white 50%)',
               paddingTop: 5 }}
        >
          <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ paddingBottom: 1 }}
          >
            <Grid item>
              <Typography variant="caption" sx={{ color: '#b09eef' }}>GET STARTED</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" sx={{ color: '#603BE2' }}>COMPUTE</Typography>
            </Grid>
          </Grid>

          <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
          >
            <Grid item sx={{ px: 4, py: 3 }}>
              <GetStartedCard  image={'/static/images/1.jpg'} name={'SIMILARITY'}/>
            </Grid>
            <Grid item>
              <GetStartedCard image={'/static/images/1.jpg'} name={'K SIMILAR OBJECT'}/>
            </Grid>
          </Grid>

        </Grid>

        <CarouselSlider/>

        <p></p>
        <Typography variant="h4"><b>Iris Categories</b></Typography>
        {/*<Grid container*/}
        {/*  direction="row"*/}
        {/*  justifyContent="center"*/}
        {/*  alignItems="center"*/}
        {/*>*/}
        {/*  {specieType.map(spec => {*/}
        {/*    return (*/}
        {/*          <Grid item sx={{ p: 1 }}>*/}
        {/*            <Cards image={spec.image} name={spec.name} description={spec.description} />*/}
        {/*          </Grid>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*</Grid>*/}

        {/*<p className={styles.description}>*/}
        {/*  Get started by editing{' '}*/}
        {/*  <code className={styles.code}>pages/index.tsx</code>*/}
        {/*</p>*/}

        {/*<div className={styles.grid}>*/}
        {/*  <a href="https://nextjs.org/docs" className={styles.card}>*/}
        {/*    <h2>Documentation &rarr;</h2>*/}
        {/*    <p>Find in-depth information about Next.js features and API.</p>*/}
        {/*  </a>*/}

        {/*  <a href="https://nextjs.org/learn" className={styles.card}>*/}
        {/*    <h2>Learn &rarr;</h2>*/}
        {/*    <p>Learn about Next.js in an interactive course with quizzes!</p>*/}
        {/*  </a>*/}

        {/*  <a*/}
        {/*    href="https://github.com/vercel/next.js/tree/canary/examples"*/}
        {/*    className={styles.card}*/}
        {/*  >*/}
        {/*    <h2>Examples &rarr;</h2>*/}
        {/*    <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
        {/*  </a>*/}

        {/*  <a*/}
        {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
        {/*    className={styles.card}*/}
        {/*  >*/}
        {/*    <h2>Deploy &rarr;</h2>*/}
        {/*    <p>*/}
        {/*      Instantly deploy your Next.js site to a public URL with Vercel.*/}
        {/*    </p>*/}
        {/*  </a>*/}
        {/*</div>*/}
      </main>

      <Footer />
    </div>
  )
}

export default Home
