import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next'
import GradeSelector from '../components/GradeSelector';
import Layout from '../components/Layout';

const HowItWorks: NextPage = () => {
    return <Layout>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item xs={1} md={2}></Grid>
                <Grid item xs={10} md={8}>
                    <Typography variant='h3'>Tech stack</Typography>
                    <Typography variant='body1'>For those who are interested, this app is built using Next.JS, a server-side rendering production React framework. The front-end components are mostly MaterialUI.</Typography>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>
            </Grid>

        </Box>
    </Layout>

}

export default HowItWorks;