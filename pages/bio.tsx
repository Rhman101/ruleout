import Typography from '@mui/material/Typography';
import type { NextPage } from 'next'
import GradeSelector from '../components/GradeSelector';
import Layout from '../components/Layout';

const HowItWorks: NextPage = () => {
    return <Layout>
        <Typography variant='h3'>Bio</Typography>
        <Typography variant='body1'>Ruan is human, we trust.</Typography>
    </Layout>

}

export default HowItWorks;