import React, { useEffect, useState } from "react";
import type { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import AppLayout from '../../../../../../components/AppLayout/AppLayout';
import gradeTopicChallenges from '../../../../../../constants/gradeTopicChallenges';
import GTCCard from '../../../../../../components/GTCCard';
import Stack from "@mui/material/Stack";
import { Challenge } from "../../../../../../constants/gradeTopicChallengesInterface";
import ChallengeUI from "../../../../../../components/ChallengeUI";

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { gradeDigit: string, topicName: string, challengeName: string } }[] = [];
  gradeTopicChallenges.forEach((grade) => {
    grade.topics.forEach((topic) => {
      topic.challenges.forEach((challenge) => {
        paths.push({
          params: {
            gradeDigit: grade.gradeDigit.toLowerCase(),
            topicName: topic.topicName.toLowerCase(),
            challengeName: challenge.name.toLowerCase()
          }
        })
      })
    })
  })
  return {
    paths,
    fallback: false
  }
}

interface Props {
  gradeDigit: string;
  topicName: string;
  challenge: Challenge;
  error: false;
}

interface PropsError {
  error: true;
  gradeDigit: undefined;
  topicName: undefined;
  challenge: undefined;
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: GetStaticPropsContext): Promise<{ props: Props; } | { props: PropsError; }> {
  for (let i = 0; i < gradeTopicChallenges.length; i++) {
    let grade = gradeTopicChallenges[i];
    for (let k = 0; k < grade.topics.length; k++) {
      let topic = grade.topics[k];
      for (let j = 0; j < topic.challenges.length; j++) {
        let challenge = topic.challenges[j];
        if (
          grade.gradeDigit === context.params?.gradeDigit
          &&
          topic.topicName.toLowerCase() === context.params?.topicName
          &&
          challenge.name.toLowerCase() === context.params?.challengeName
        ) {
          return {
            props: {
              gradeDigit: context.params.gradeDigit,
              topicName: topic.topicName,
              challenge,
              error: false
            }
          }
        }
      }
    }
  }
  return { props: { error: true, gradeDigit: undefined, topicName: undefined, challenge: undefined } }
}

const ChallengePage: NextPage<Props | PropsError> = ({ gradeDigit, topicName, challenge }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add database calls to confirm access here.
    if (gradeDigit !== undefined && topicName !== undefined && challenge !== undefined) {
      setLoaded(true);
    }
  }, [challenge, gradeDigit, topicName])
  return <AppLayout>
    <Stack sx={{ flexGrow: 1 }}
      alignItems="center"
      direction='column'
      spacing={10}
    >
      {loaded && gradeDigit !== undefined && topicName !== undefined && challenge !== undefined && <ChallengeUI
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
