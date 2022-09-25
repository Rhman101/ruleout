import React from "react";
import type { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import AppLayout from '../../../../../components/AppLayout/AppLayout';
import gradeTopicChallenges from '../../../../../constants/gradeTopicChallenges';
import GTCCard from '../../../../../components/GTCCard';
import Stack from "@mui/material/Stack";
import { GradeTopicChallenge } from "../../../../../constants/gradeTopicChallengesInterface";

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { gradeDigit: string, topicName: string } }[] = [];
  gradeTopicChallenges.forEach((grade) => {
    grade.topics.forEach((topic) => {
      paths.push({
        params: {
          gradeDigit: grade.gradeDigit.toLowerCase(),
          topicName: topic.topicName.toLowerCase()
        }
      })
    })
  })
  return {
    paths,
    fallback: false
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: GetStaticPropsContext) {
  for (let i = 0; i < gradeTopicChallenges.length; i++) {
    let grade = gradeTopicChallenges[i];
    for (let k = 0; k < grade.topics.length; k++) {
      if (
        grade.topics[i].topicName.toLowerCase() === context.params?.topicName
        &&
        grade.gradeDigit === context.params?.gradeDigit
      ) {
        return { props: { gradeDigit: context.params.gradeDigit, topic: grade.topics[k] } }
      }

    }
  }
  return { props: { error: 'true' } }

}

const TopicPage: NextPage = (props: any) => {
  const GTC: GradeTopicChallenge = {
    name: `Grade ${props.gradeDigit}`,
    gradeDigit: props.gradeDigit,
    topics: [{
      topicName: props.topic.topicName,
      challenges: props.topic.challenges
    }]
  }
  return <AppLayout>
    <Stack sx={{ flexGrow: 1 }}
      alignItems="center"
      direction='column'
      spacing={10}
    >
      <GTCCard GTC={GTC} />
    </Stack>
  </AppLayout>
}

export default TopicPage
