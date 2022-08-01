import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import * as React from "react";
import Footer from "../components/Footer";
import Cards from "../components/Cards"
import {Box, Button, Grid, Typography} from "@mui/material";

interface specie {
  image: string;
  name: string;
  description: string
}

const specieType: readonly specie[] = [
  {image: '/static/images/white_iris.jpg', name: 'Bearded Iris', description: 'Bearded Iris (Iris germanica) is an evergreen perennial rhizome found in well-drained soil from Southern and Central Europe.'},
  {image: '/static/images/purple.jpg', name: 'Aril Iris', description: 'Arils, or aril irises, are wild bearded iris species found in semi-arid to desert climates from Central Asia to the Middle East.'},
  {image: '/static/images/1.jpg', name: 'Beardless Iris', description: 'Beardless Iris is iris without a beard found from the southern areas of the temperate zone up to the edges of the frigid arctic.'}
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Moliris</title>
        <meta name="description" content="Compute Similarities of objects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

        <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ bgcolor: '#f6f5f5', height: 500 }} >
          <Grid item className={styles.container}>
            <Typography variant={'h4'}>Know what you have, feel the power</Typography>
            <Button variant="contained" sx={{ bgcolor: 'linear-gradient(to right bottom, #f6f5f5, #6B0AC9)', textTransform: 'none' }} >Get Started</Button>
          </Grid>
          <Grid item className={styles.container}>
            <h1>World</h1>
          </Grid>
        </Grid>

        <h1 className={styles.title}>
          Welcome to <a href="#">Moliris</a>
        </h1>

        <Typography variant="h4"><b>Iris Categories</b></Typography>
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {specieType.map(spec => {
            return (
                  <Grid item sx={{ p: 1 }}>
                    <Cards image={spec.image} name={spec.name} description={spec.description} />
                  </Grid>
            )
          })}
        </Grid>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
