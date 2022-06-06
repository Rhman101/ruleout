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
                    <Typography variant='h3'>Bio</Typography>
                    <br></br>
                    <Typography variant='body1'>
                        I am Ruan Huysen. I am an educational technologist, qualified Gr. 12 math teacher and software developer. I have a passion of mathematics pedagogy and have roughly 10 years’ experience helping high school students excel at math.  If you need to contact me for whatever reason, please feel free to email me at rhuysen@gmail.com.
                    </Typography><Grid item xs={1} md={2}></Grid>
                </Grid>
            </Grid>

        </Box>
    </Layout>



}

export default HowItWorks;