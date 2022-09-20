import { styled, useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout';
import MiniChallengeTabs from './../components/MiniChallengeTabs';
import Paper from '@mui/material/Paper';
import React from "react";
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import useIsSignedIn from '../components/hooks/useIsSignedIn';
import { useRouter } from 'next/router';

const fadeInA = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const Home: NextPage = () => {
  const theme = useTheme();

  const philosophies = [{
    idea: 'Practice must be curriculum-aligned',
    implication: 'Else students have no motivation to practice',
  }, {
    idea: 'In math, one concept builds upon another',
    implication: 'Confidence ONLY comes from succeeding at fundamentals'
  }, {
    idea: 'Math is both a field of knowledge and a skillset',
    implication: 'Practice needs to continue until a skill is measurably attained'
  }, {
    idea: 'Exams are time-bound, like it or not',
    implication: 'Skill-building practice must be time-bound'
  }]

  const StandoutTextA = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    animation: `${fadeInA} 2s`,
    color: `${theme.palette.primary.contrastText}`
  }))

  const [isSignedIn] = useIsSignedIn();
  const router = useRouter();

  if (isSignedIn) {
    router.push('/app');
  }

  return (<Layout isLoginPage={false}>
    <Grid container spacing={5} id='opening' sx={{
      marginBottom: { xs: '100px', md: '200px' }
    }}>
      <Grid item xs={0} md={6}>
      </Grid>
      <Grid item xs={12} md={6}>
        <StandoutTextA variant='h3'>A different way to practice math.</StandoutTextA>
      </Grid>
    </Grid>

    <Grid container spacing={5} id='whyItWorks' sx={{ minHeight: '450px', marginBottom: { xs: '50px', md: '00px' } }}>
      <Grid item xs={12} md={6}>
        <Typography variant='h4' color={theme.palette.text.primary}>Core Philosophies</Typography>
        <Typography variant='h6' color={theme.palette.text.secondary}>... and why they work</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        {philosophies.map((elem, id) => <div key={id}>
          <Typography variant='h6' >{elem.idea}</Typography>
          <Typography variant='subtitle2' sx={{ marginLeft: '15px' }}> - {elem.implication}</Typography>
        </div>)}
      </Grid>
    </Grid>

    <Grid container spacing={5} id='tryIt' sx={{ minHeight: '550px' }}>
      <Grid item xs={12} md={6}>
        <Typography variant='h4' sx={{ display: { xs: 'flex', md: 'none' }, margin: '15px', textAlign: 'center' }}>Try a challenge!</Typography>
        <Typography variant='h6' sx={{ display: { xs: 'flex', md: 'none' }, margin: '15px', textAlign: 'center' }}>
          ... or login to get started!
          <Link href='/login' passHref>
            <Button variant='contained' size='small' sx={{ margin: '5px', width: '100px', display: { xs: 'flex', md: 'none' } }}>Login</Button>
          </Link>
        </Typography>
        <Paper elevation={5}>
          <MiniChallengeTabs />
        </Paper>
      </Grid>
      <Grid item xs={0} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Stack>
          <Typography variant='h4' sx={{ marginTop: '150px' }}>Try a challenge!</Typography>
          <Typography variant='subtitle1'>... or login to get started!</Typography>
          <Link href='/login' passHref>
            <Button variant='contained' size='small' sx={{ margin: '20px', width: '100px' }}>Login</Button>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  </Layout>
  )
}

export default Home
