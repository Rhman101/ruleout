import Typography from '@mui/material/Typography';
import type { NextPage } from 'next'
import GradeSelector from './../components/GradeSelector';
import Layout from './../components/Layout';

const HowItWorks: NextPage = () => {
    return <Layout>
        <Typography variant='h3'>How it works</Typography>
        <Typography variant='body1'>Do more math. Get better. Basically.</Typography>
    </Layout>

}

export default HowItWorks;