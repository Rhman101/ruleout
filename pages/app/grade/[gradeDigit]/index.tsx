import React from "react";
import type { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import AppLayout from '../../../../components/AppLayout/AppLayout';
import gradeTopicChallenges from '../../../../constants/gradeTopicChallenges';
import GTCCard from '../../../../components/GTCCard';
import Stack from "@mui/material/Stack";

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: { params: { gradeDigit: string } }[] = [];
  gradeTopicChallenges.forEach((grade) => {
    paths.push({ params: { gradeDigit: grade.gradeDigit } });
  })
  return {
    paths,
    fallback: false,
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    // Passed to the page component as props
    props: { GTC: gradeTopicChallenges.find((elem) => elem.gradeDigit === context.params?.gradeDigit) },
  }
}

const GradePage: NextPage = (props: any) => {

  return <AppLayout>
    <Stack sx={{ flexGrow: 1 }}
      alignItems="center"
      direction='column'
      spacing={10}
    >
      <GTCCard GTC={props.GTC} />
    </Stack>
  </AppLayout>
}

export default GradePage
