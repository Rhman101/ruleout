import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next'
import GradeSelector from '../components/GradeSelector';
import Layout from '../components/Layout';

const SupportThisWork: NextPage = () => {
    return <Layout>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item xs={1} md={2}></Grid>
                <Grid item xs={10} md={8}>
                    <Typography variant='h3'>Please note</Typography>
                    <Typography variant='body1'>This project is under development by just me, Ruan Huysen. Please email me at rhuysen@gmail.com for functionality such as account deletion and password resets.</Typography>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>
            </Grid>

        </Box>
    </Layout>
}

export default SupportThisWork;