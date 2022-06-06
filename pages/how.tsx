import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next'
import GradeSelector from './../components/GradeSelector';
import Layout from './../components/Layout';

const HowItWorks: NextPage = () => {
    return <Layout>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item xs={1} md={2}></Grid>
                <Grid item xs={10} md={8}>
                    <Typography variant='h3'>How it works</Typography>
                    <br></br>
                    <Typography variant='body1'>
                        This math challenge application seeks to bridge the gap between knowledge and skill. We all know how times tables work, but how many truly know them? How many can get 80% for 40 times tables questions if they only have 7 seconds per question, as this app requires? Yet, if grade 8 students can’t do this, algebra, especially factorizing, becomes much harder! Thus, the little time it takes to learn this skill pays off massive dividends in the long run.
                    </Typography>
                    <br></br>
                    
                    <Typography variant='body1'>
                        This app seeks to develop mathematics skills in students in a way that is difficult to do in the classroom. It seeks to support the teacher and learner by enabling the learner to move from awareness of a core area of skill in math to mastery over time. This objective is woven into every aspect of question design and format.
                    </Typography>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>
            </Grid>
        </Box>
    </Layout>

}

export default HowItWorks;