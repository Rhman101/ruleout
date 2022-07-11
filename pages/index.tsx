import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Image from 'next/image'
import homeBackground from './../public/home_background.jpg';
import Layout from '../components/Layout';

import React, { useState } from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareRootVariable, faAt, faUserPen, faCircleQuestion, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

import WelcomeModal from '../components/HomePage/WelcomeModal'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import MiniChallengeTabs from './../components/MiniChallengeTabs';
import Typography from '@mui/material/Typography';

const MiniChallenge = dynamic(
  () => import('../components/HomePage/MiniChallenge'),
  { ssr: false }
)

const Home: NextPage = () => {
  const infoBoxes = [{
    title: 'How it works',
    text: '',
    icon: faSquareRootVariable,
    href: '/how'
  }, {
    title: 'Why this way?',
    text: 'Some pedagogical thoughts.',
    icon: faCircleQuestion,
    href: '/'
  }, {
    title: 'By Ruan Huysen',
    text: 'Click for more info',
    icon: faUserPen,
    href: '/bio'
  }]

  const secondInfoBoxes = [{
    title: 'Want to support me?',
    subtitle: '... or report a bug?',
    icon: faAt,
    href: '/support'
  }, {
    title: 'Tech stack and code.',
    subtitle: 'Click for github link!',
    icon: faLaptopCode,
    href: '/stack'
  }]

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Text = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary
  }))

  const FAI = styled(FontAwesomeIcon)(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: '10px'
  }))

  return (
    <Layout>
      <br></br>
      <Box sx={{ flexGrow: 1 }}>

        {/* Top set of 2 boxes. */}
        <Grid container spacing={4}>
          <Grid item xs={0} sm={.5} md={1}></Grid>
          <Grid item xs={12} sm={5.5} md={5}>
            <Item sx={{
              height: '550px',
              paddingTop: '10px'
            }} >
              <div style={{ position: 'relative' }}>
                <Image
                  priority={true}
                  src={homeBackground}
                  alt='background'
                  layout='responsive'
                  style={{ zIndex: 0 }}
                  objectFit="cover"
                  objectPosition='center'
                >
                </Image>
                <Paper sx={{
                  // zIndex: 1,
                  position: 'absolute',
                  top: '10%',
                  left: '8%',
                  width: 'auto',
                  height: 'auto',
                  margin: '20px',
                  color: '#FFF',
                  backgroundColor: 'rgba(0,0,0,.4)'
                }}>
                  <Typography
                    variant='h4'
                    sx={{
                      padding: '10px 20px 00px 20px',
                      color: '#d9d9d9'
                    }} gutterBottom>Interactive Math Challenges</Typography>

                  {[
                    'curriculum-aligned',
                    'for South Africa'
                  ].map((elem, indx) =>
                    <Text
                      variant='h6'
                      style={{
                        zIndex: 1,
                        padding: '5px 20px 10px 20px',
                        color: '#d9d9d9'
                      }}
                      key={indx}>{elem}
                    </Text>
                  )}
                </Paper>
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={5.5} md={5}>
            <Item elevation={3} sx={{ height: '550px' }}>
              <Text variant='h4'>Try a random challenge!</Text>
              <MiniChallengeTabs>
              </MiniChallengeTabs>
            </Item>
          </Grid>
          <Grid item xs={0} sm={.5} md={1}></Grid>
        </Grid>

        <br></br>

        {/* Middle set of 3 boxes. */}

        <Grid container spacing={4}>
          <Grid item sm={1} md={1}></Grid>
          <Grid item sm={10}>
            <Grid container spacing={4}>
              {infoBoxes.map((elem, id) => <Grid item key={id} xs={12} sm={4} md={4}>
                <Link href={elem.href} passHref>
                  <Item sx={{ height: '190px' }}>
                    <FAI icon={elem.icon} size="4x" ></FAI>
                    <Text variant="h5">{elem.title}</Text>
                    <Text variant='subtitle1'>{elem.text}</Text>
                  </Item>
                </Link>
              </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item sm={1} md={1}></Grid>
        </Grid>

        <br></br>

        {/* Bottom set of 2 boxes. */}
        <Grid container spacing={4}>
          <Grid item sm={1} ></Grid>
          {secondInfoBoxes.map((elem, indx) => <Grid xs={12} sm={5} item key={indx}>
            <Link href={elem.href} passHref>
              <Item>
                <FAI icon={elem.icon} size="4x"></FAI>
                <Text variant="h5">{elem.title}</Text>
                <Text variant='subtitle1'>{elem.subtitle}</Text>
              </Item>
            </Link>
          </Grid>
          )}
          <Grid item sm={1}></Grid>
        </Grid>
        <br></br>

      </Box>

    </Layout >
  )
}

export default Home
