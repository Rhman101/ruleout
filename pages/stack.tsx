import Typography from '@mui/material/Typography';
import type { NextPage } from 'next'
import GradeSelector from '../components/GradeSelector';
import Layout from '../components/Layout';

const HowItWorks: NextPage = () => {
    return <Layout>
        <Typography variant='h3'>Tech stack</Typography>
        <Typography variant='body1'>Next.JS, which uses React. MaterialUI.</Typography>
    </Layout>

}

export default HowItWorks;