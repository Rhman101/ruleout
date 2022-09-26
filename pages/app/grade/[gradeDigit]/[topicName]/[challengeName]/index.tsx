import React, { useEffect, useState } from "react";
import type { NextPage } from 'next';
import AppLayout from '../../../../../../components/AppLayout/AppLayout';
import gradeTopicChallenges from '../../../../../../constants/gradeTopicChallenges';
import Stack from "@mui/material/Stack";
import { Challenge } from "../../../../../../constants/gradeTopicChallengesInterface";
import ChallengeUI from "../../../../../../components/ChallengeUI";
import { useRouter } from "next/router";


const ChallengePage: NextPage = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const [challenge, setChallenge] = useState<Challenge | undefined>(undefined)
  const [gradeDigit, setGradeDigit] = useState('');
  const [topicName, setTopicName] = useState('');

  useEffect(() => {
    if (
      router.isReady
      &&
      router.query.gradeDigit
      &&
      router.query.topicName
      &&
      router.query.challengeName
    ) {
      for (let i = 0; i < gradeTopicChallenges.length; i++) {
        let grade = gradeTopicChallenges[i];
        for (let k = 0; k < grade.topics.length; k++) {
          let topic = grade.topics[k];
          for (let j = 0; j < topic.challenges.length; j++) {
            let challenge = topic.challenges[j];
            if (
              grade.gradeDigit === router.query.gradeDigit
              &&
              topic.topicName === router.query.topicName
              &&
              challenge.name === router.query.challengeName
            ) {
              setChallenge(challenge);
              setLoaded(true);
              setGradeDigit(grade.gradeDigit);
              setTopicName(topic.topicName);
            }
          }
        }
      }
    }
  }, [router]);

  return <AppLayout>
    <Stack sx={{ flexGrow: 1 }}
      alignItems="center"
      direction='column'
      spacing={10}
    >
      {loaded && challenge !== undefined && <ChallengeUI
        generatorName={challenge.generatorName}
        settings={challenge.settings}
        args={challenge.args}
        topic={topicName}
        challengeName={challenge.name}
        gradeDigit={gradeDigit}
      ></ChallengeUI>}
    </Stack>
  </AppLayout>
}

export default ChallengePage;
