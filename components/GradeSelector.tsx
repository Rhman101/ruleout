import type { NextPage } from 'next'

import styles from './GradeSelector.module.css'
import gradeTopicChallenges from '../constants/gradeTopicChallenges'

// Playground:
import React from "react";
import Link from 'next/link'

const GradeSelector: NextPage = () => {

  return (
      <ul>
        {gradeTopicChallenges.map((grade, gradeIndex) =>
          grade.topics.length > 0 &&
          <Link href={`/challenges/grade/${gradeIndex + 1}`} key={gradeIndex}>
            <a style={{textDecoration: 'none'}}>
              <li className={styles.gradeItem}>{grade.name}</li>
            </a>
          </Link>
        )}
      </ul>
  )
}

export default GradeSelector
