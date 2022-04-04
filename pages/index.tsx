import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout';
import gradeTopicChallenges from '../constants/gradeTopicChallenges'

// Playground:
import React, { useContext, useEffect, useState } from "react";
import { useAppContext } from '../context/state'
import Link from 'next/link'
import GradeSelector from '../components/GradeSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSquareRootVariable, faAt, faUserPen, faCircleQuestion, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { randomNumber } from '../constants/library'
import { Challenge, initialChallenge } from '../constants/gradeTopicChallengesInterface'
import WelcomeModal from '../components/HomePage/WelcomeModal'
import Button from '@mui/material/Button';
// import { Button, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
// import MiniChallenge from '../components/HomePage/MiniChallenge'

const MiniChallenge = dynamic(
  () => import('../components/HomePage/MiniChallenge'),
  { ssr: false }
)

const Home: NextPage = () => {
  const infoBoxes = [{
    title: 'How it works',
    text: '',
    icon: faSquareRootVariable
  }, {
    title: 'Why this way?',
    text: 'Some pedagogical thoughts.',
    icon: faCircleQuestion
  }, {
    title: 'By Ruan Huysen',
    text: 'Click for more info',
    icon: faUserPen
  }]

  const secondInfoBoxes = [{
    title: 'Want to support me?',
    subtitle: '... or report a bug?',
    icon: faAt
  }, {
    title: 'Tech stack and code.',
    subtitle: 'Click for github link!',
    icon: faLaptopCode
  }]

  const [key, setKey] = useState('Grade 12');
  const [challenge, setChallenge] = useState<Challenge>(initialChallenge);

  const getChallengeData = (grade: string) => {
    const index = gradeTopicChallenges.findIndex((elem) => elem.name === grade);
    const topics = gradeTopicChallenges[index].topics;
    const topic = topics[randomNumber(0, topics.length - 1)];
    const challengeData = topic.challenges[randomNumber(0, topic.challenges.length - 1)];
    setChallenge(challengeData);
  }

  useEffect(() => {
    getChallengeData('Grade 12');
  }, []);

  const [displayModal, setDisplayModal] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Text = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary
  }))

  const FAI = styled(FontAwesomeIcon)(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: '10px'
  }))

  return (
    <Layout>
      <br></br>
      <Box sx={{ flexGrow: 1 }}>


        <Grid container spacing={4}>
          <Grid item xs={0} sm={.5} md={1}></Grid>
          <Grid item xs={12} sm={5.5} md={5}>
            <Item>
              <Text variant='h4' gutterBottom>Interactive Math Challenges</Text>
              {['South Africa-focused', 'CAPS-aligned', 'Skill-building', 'Results-oriented'].map((elem, indx) =>
                <Text variant='h6'
                  key={indx}>{elem}</Text>)}
              {/* <Text variant='h4'>Available Grades:</Text>
              {gradeTopicChallenges.map((grade, gradeIndx) =>
                <Link href={`/challenges/grade/${gradeIndx + 1}`} passHref key={gradeIndx}>
                  <div style={{ margin: '5px' }}><Button variant='contained'>{grade.name}</Button></div>
                </Link>
              )} */}
            </Item>
          </Grid>


          <Grid item xs={12} sm={5.5} md={5}>
            <Item elevation={3}>
              <Text variant='h4'>Try a challenge!</Text>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(eventKey) => {
                  if (eventKey !== null) {
                    setKey(eventKey);
                    getChallengeData(eventKey);
                  }
                }}
                className='mb-3 global_tabs'
              >
                <Tab eventKey="Grade 7" title="Grade 7">
                </Tab>
                <Tab eventKey="Grade 9" title="Grade 9">
                </Tab>
                <Tab eventKey="Grade 12" title="Grade 12">
                </Tab>
              </Tabs>
              {challenge.name.length > 1 && <MiniChallenge gradeString={key} challenge={challenge}></MiniChallenge>}
            </Item>
          </Grid>
          <Grid item xs={0} sm={.5} md={1}></Grid>
        </Grid>

        <br></br>

        <Grid container spacing={4}>
          <Grid item sm={0.75} md={1.5}></Grid>
          {infoBoxes.map((elem, id) => <Grid item key={id} xs={12} sm={3.5} md={3}>
            <Item onClick={() => id == 2 && setDisplayModal(true)}>

              <FAI icon={elem.icon} size="4x" ></FAI>
              <Text variant="h5">{elem.title}</Text>
              <Text variant='subtitle1'>{elem.text}</Text>

            </Item>
          </Grid>
          )}
          <Grid item sm={0.75} md={1.5}></Grid>
        </Grid>

        <br></br>

        {displayModal && <WelcomeModal handleClose={() => setDisplayModal(false)}></WelcomeModal>}
        <Grid container spacing={4}>
          {secondInfoBoxes.map((elem, indx) => <Grid xs={12} md={6} item key={indx}>
            <Item>
              <FAI icon={elem.icon} size="4x"></FAI>
              <Text variant="h5">{elem.title}</Text>
              <Text variant='subtitle1'>{elem.subtitle}</Text>
            </Item>
          </Grid>
          )}
        </Grid>
        <br></br>

      </Box>

    </Layout >
  )
}

export default Home
