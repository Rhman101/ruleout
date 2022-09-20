import { useTheme } from '@mui/material/styles'
import Layout from '../components/Layout';
import React from "react";
import type { NextPage } from 'next'
import SignIn from '../components/SignIn';

const Home: NextPage = () => {

  return <Layout isLoginPage={true}>
    <SignIn></SignIn>
  </Layout>
}

export default Home
