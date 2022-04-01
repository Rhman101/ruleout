import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'
import Layout from '../components/Layout';
import gradeTopicChallenges from '../constants/gradeTopicChallenges'

// Playground:
import React, { useContext, useEffect, useState } from "react";
import { useAppContext } from '../context/state'
import Link from 'next/link'
import GradeSelector from '../components/GradeSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSquareRootVariable, faAt, faUserPen, faCircleQuestion, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { randomNumber } from '../constants/library'
import { Challenge, initialChallenge } from '../constants/gradeTopicChallengesInterface'
import WelcomeModal from '../components/HomePage/WelcomeModal'
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

  return (
    <Layout>
      <Container>
        <div className={styles.main}>

          <Row>
            <Col>
              <div className={styles.contentBlock}>
                <h2>Interactive Math Challenges</h2>
                <p>South Africa-focused</p>
                <p>CAPS-aligned</p>
                <p>Skill-building</p>
                <p>Results-oriented</p>
                <h4 style={{color: '#3d4fad'}}>Available Grades</h4>
                {gradeTopicChallenges.map((grade, gradeIndx) =>
                  <Link href={`/challenges/grade/${gradeIndx + 1}`} passHref key={gradeIndx}>
                    <div style={{ margin: '5px' }}><Button variant="info" size='sm'>{grade.name}</Button></div>
                  </Link>
                )}
              </div>
            </Col>
            <Col>
              <div className={styles.contentBlock}>
                <h4>Try a challenge!</h4>
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
              </div>
            </Col>
          </Row>


          <Row>
            {infoBoxes.map((elem, id) => <Col key={id} className={styles.infoBox}>
              <div className={styles.contentBlock} onClick={() => id == 2 && setDisplayModal(true)}>
                <FontAwesomeIcon icon={elem.icon} size="4x" className={styles.FAI}></FontAwesomeIcon>
                <h3>{elem.title}</h3>
                <p>{elem.text}</p>
              </div>
            </Col>
            )}
          </Row>

          {displayModal && <WelcomeModal handleClose={() => setDisplayModal(false)}></WelcomeModal>}

          <Row>
            {secondInfoBoxes.map((elem, indx) => <Col key={indx} className={styles.detailsBox}>
              <div className={styles.contentBlock}>
                <FontAwesomeIcon icon={elem.icon} size="4x" className={styles.FAI}></FontAwesomeIcon>
                <h3>{elem.title}</h3>
                <p>{elem.subtitle}</p>
              </div>
            </Col>
            )}
          </Row>
        </div>

      </Container>

    </Layout>
  )
}

export default Home
