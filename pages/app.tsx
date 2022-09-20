import React, { useState } from "react";
import type { NextPage } from 'next'
import AppLayout from "../components/AppLayout/AppLayout";
import gradeTopicChallenges from "../constants/gradeTopicChallenges";
import Card from "@mui/material/Card";
import { Button, CardContent, CardHeader, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Challenge } from "../constants/gradeTopicChallengesInterface";
import { SignalCellularNullOutlined } from "@mui/icons-material";
import ChallengeUI from "../components/ChallengeUI";

const Home: NextPage = () => {
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    const [gradeChar, setGradeChar] = useState<string>('')
    const [topicName, setTopicName] = useState<string>('')

    return (
        <AppLayout>
            {challenge !== null && <Button variant='contained' onClick={() => setChallenge(null)}>Back</Button>}
            {challenge === null && gradeTopicChallenges.map((grade, indx) => <Stack sx={{ flexGrow: 1 }}
                alignItems="center"
                direction='column'
                key={indx}
                spacing={10}
            >
                <Card sx={{ margin: '15px', width: { xs: '100%', sm: '400px' } }} elevation={5} >
                    <CardContent>
                        <Typography variant='h5'>{grade.name}</Typography>
                        {grade.topics.map((topic, topicIndex) => <div key={topicIndex} style={{ paddingLeft: '15px' }}>
                            <Typography variant='h6'>
                                {topic.topicName}
                            </Typography>
                            {topic.challenges.map((challenge, challengeIndex) => <Typography
                                onClick={() => {
                                    setChallenge(challenge);
                                    setGradeChar(grade.gradeDigit);
                                    setTopicName(topic.topicName);
                                }}
                                key={challengeIndex}
                                sx={{ paddingLeft: '15px' }}
                            >
                                <ArrowForwardIosIcon fontSize='small' sx={{ position: 'relative', top: '3px' }} />
                                {challenge.name}
                            </Typography>
                            )}
                        </div>
                        )}
                    </CardContent>
                </Card>
            </Stack>
            )}
            {challenge !== null && <ChallengeUI
                settings={challenge.settings}
                generatorName={challenge.generatorName}
                args={challenge.args}
                grade={gradeChar}
                topic={topicName}
                challenge={challenge.name}
            ></ChallengeUI>}
        </AppLayout>
    )
}

export default Home
