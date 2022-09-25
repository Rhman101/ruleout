import { GradeTopicChallenge } from '../constants/gradeTopicChallengesInterface';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useTheme } from '@mui/material/styles';

const GTCCard: React.FC<{ GTC: GradeTopicChallenge, key?: number }> = ({ GTC }) => {
    const theme = useTheme();

    return <Paper sx={{ margin: '20px', padding: '20px', width: { xs: '100%', sm: '600px' } }} elevation={5}>
        <Grid container spacing={2}> {/* Container for grades, topics and challenges. */}
            <Grid item xs={12}>
                {/* Grade Header */}
                <Link href={`/app/grade/${GTC.gradeDigit}/`} style={{ textDecoration: 'none' }}>
                    <Typography variant='h5'>{GTC.name}</Typography>
                </Link>
            </Grid>

            {GTC.topics.map((topic, topicIndex) => <Grid key={topicIndex} item xs={12}>

                <Grid item xs={12}>
                    {/* Topic Name */}
                    <Link href={`/app/grade/${GTC.gradeDigit}/${topic.topicName.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                        <Typography variant='h6'>
                            {topic.topicName}
                        </Typography>
                    </Link>
                </Grid>

                <Grid item xs={12}>
                    {/* Challenges  */}
                    <Grid container spacing={1}>
                        {topic.challenges.map((challenge, challengeIndex) => <Grid
                            item xs={12}
                            key={challengeIndex}
                            sx={{ marginTop: '10px', backgroundColor: `${!(challengeIndex % 2) && theme.palette.grey[100]}`, borderRadius: '5%' }}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={10}>
                                    <Link
                                        href={`/app/grade/${GTC.gradeDigit}/${topic.topicName.toLowerCase()}/${challenge.name.toLowerCase()}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography
                                            key={challengeIndex}
                                            sx={{ paddingLeft: '15px' }}
                                        >
                                            <ArrowForwardIosIcon fontSize='small' sx={{ position: 'relative', top: '3px' }} />
                                            {challenge.name}
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={2}>
                                    {challengeIndex === 0 ? <CheckCircleRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}
                                </Grid>
                            </Grid>
                        </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>

            )}
        </Grid>
    </Paper >
}

export default GTCCard;


{/* <div key={topicIndex} style={{ paddingLeft: '15px' }}> */ }
{/* </div> */ }