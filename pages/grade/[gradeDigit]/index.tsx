import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.css';
import Layout from '../../../components/Layout';
// Playground:
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import gradeTopicChallenges from './../../../constants/gradeTopicChallenges';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { UserContext } from '../../_app';

// For performance optimization, this should be updated to use getStaticPaths instead of the useEffect: 
// https://nextjs.org/docs/api-reference/data-fetching/get-static-paths

const Grade: NextPage = () => {
  const router = useRouter();

  const [gradeDigit, setGradeDigit] = useState('');

  useEffect(() => {
    if (typeof (router.query.gradeDigit) === "string") {
      setGradeDigit(router.query.gradeDigit)
    }
  }, [gradeDigit, router.isReady, router.query])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Topic = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 'bold'
  }))

  const Grade = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer'
    }
  }))

  const Text = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
  }))

  const FAI = styled(FontAwesomeIcon)(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: '10px'
  }))

  const Challenge = styled(Typography)(({ theme }) => ({
    '&:hover': {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  }))

  const user = useContext(UserContext);

  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        {gradeDigit !== '' &&
          <Grid container spacing={4}>
            <Grid item xs={0} sm={2} md={3}></Grid>
            <Grid item xs={12} sm={8} md={6}>
              {/* Render heading. */}
              <br></br>
              {gradeDigit !== '' && <>
                {
                  <Item elevation={2}>
                    {/* <Link href="/challenges" passHref> */}
                    {/* <div className={styles.gradeItem}> */}

                    <Grade variant='h4' gutterBottom>
                      {/* <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> */}
                      {gradeTopicChallenges.find((grade) => grade.gradeDigit === gradeDigit)?.name}
                    </Grade>

                    {/* </div> */}
                    {/* </Link> */}
                  </Item>
                }

                {/* Render all topics. */}
                <br></br>
                {
                  gradeTopicChallenges[gradeTopicChallenges.findIndex((grade) => grade.gradeDigit === gradeDigit)].topics.map((topic, topicKey) => {
                    return <div key={topicKey}>
                      <Item elevation={3} key={topicKey}>
                        <Topic variant='h5' gutterBottom sx={{ fontWeight: 'bold' }}>{topic.topicName}</Topic>
                        {/* </div> */}
                        {/* Render all challenges for each topic. */}
                        {
                          gradeTopicChallenges[gradeTopicChallenges.findIndex((grade) => grade.gradeDigit === gradeDigit)].topics[topicKey].challenges.map((challenge, challengeKey) => {
                            return <div key={challengeKey}>
                              <Link href={`/grade/${gradeDigit}/topic/${topic.topicName}/${challenge.name}`} passHref>
                                {/* <div className={styles.challengeItem}> */}
                                <Challenge variant='h6' gutterBottom>
                                  {challenge.name}
                                  {user.userObject.completedActivities.findIndex((elem) => {
                                    // console.log({
                                    //   user: user.userObject,
                                    //   elemGradeName: elem.gradeName,
                                    //   gradeDigit: `Grade ${gradeDigit}`
                                    // })
                                    return elem.gradeName === `Grade ${gradeDigit}` && elem.name === challenge.name
                                  }) !== -1 &&
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                  }
                                </Challenge>
                              </Link>
                              
                              {/* </div> */}
                            </div>
                          })
                        }
                      </Item>
                      <br></br>
                    </div>
                  })
                }</>}
            </Grid>
            <Grid item xs={0} sm={2} md={3}></Grid>
          </Grid>
        }
      </Box>
    </Layout>
  )
}

export default Grade;
