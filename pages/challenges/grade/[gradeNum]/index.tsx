import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'
import Layout from '../../../../components/Layout'
// Playground:
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import gradeTopicChallenges from '../../../../constants/gradeTopicChallenges'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

// For performance optimization, this should be updated to use getStaticPaths instead of the useEffect: 
// https://nextjs.org/docs/api-reference/data-fetching/get-static-paths

const Grade: NextPage = () => {
  const router = useRouter();
  
  const [gradeIndex, setGradeIndex] = useState(-1);
  
  useEffect(() => {
    const { gradeNum } = router.query;
    if(router.isReady) {
      setGradeIndex(Number(gradeNum) - 1);
    }
  }, [router.isReady, router.query])

  return (
    <Layout>
      {/* Render heading. */}
      {gradeIndex !== -1 && <>
        {
        <Link href="/challenges" passHref>
          <div className={styles.gradeItem}>

            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            {'   ' + gradeTopicChallenges[gradeIndex].name}

          </div>
        </Link>
      }
      {/* Render all topics. */}
      {
        gradeTopicChallenges[gradeIndex].topics.map((topic, topicKey) => {
          return <div key={topicKey}>
          <div className={styles.topicItem}>
            {topic.topicName}
          </div>
          {/* Render all challenges for each topic. */}
            {
              gradeTopicChallenges[gradeIndex].topics[topicKey].challenges.map((challenge, challengeKey) => {
                return <Link href={`/challenges/grade/${gradeIndex}/topic/${topic.topicName}/${challenge.name}`} passHref key={challengeKey}>
                <div className={styles.challengeItem}>
                  {challenge.name}
                </div>
                </Link>
              })
            }
          </div>
        })
      }</>}
      
    </Layout>
  )
}

export default Grade;
