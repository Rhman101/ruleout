import React, { useState } from "react";
import type { NextPage } from 'next'
import AppLayout from "../../components/AppLayout/AppLayout";
import gradeTopicChallenges from "../../constants/gradeTopicChallenges";
import { Challenge } from "../../constants/gradeTopicChallengesInterface";
import GTCCard from "../../components/GTCCard";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


const Home: NextPage = () => {
    const [challenge, setChallenge] = useState<Challenge | null>(null);

    return (
        <AppLayout>
            {challenge !== null && <Button variant='contained' onClick={() => setChallenge(null)}>Back</Button>}
            {challenge === null && gradeTopicChallenges.map((grade, indx) => <Stack sx={{ flexGrow: 1 }}
                alignItems="center"
                direction='column'
                key={indx}
                spacing={10}
            >
                <GTCCard GTC={grade} key={indx} />
            </Stack>
            )}
        </AppLayout>
    )
}

export default Home
