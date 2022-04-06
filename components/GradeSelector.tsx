import type { NextPage } from 'next'

import styles from './GradeSelector.module.css'
import gradeTopicChallenges from '../constants/gradeTopicChallenges'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Playground:
import React from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const GradeSelector: NextPage = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    margin: theme.spacing(2),
    // textAlign: 'center',
    width: '100%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Grade = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer'
    }
  }))

  return (<>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={0} sm={2} md={3}></Grid>
        <Grid item xs={12} sm={8} md={6}></Grid>

        {gradeTopicChallenges.map((_grade, gradeIndx) => <Item key={gradeIndx} elevation={2}>
          <Link href={`/challenges/grade/${Number(gradeIndx) + 1}`} passHref>
            {/* <div className={styles.gradeItem}> */}

            <Grade variant='h4' gutterBottom>
              {'   ' + gradeTopicChallenges[gradeIndx].name}
            </Grade>
            {/* </div> */}
          </Link>
          <br></br>
        </Item>)}
      </Grid>
    </Box >
  </>
    // <ul>
    //   {gradeTopicChallenges.map((grade, gradeIndex) =>
    //     grade.topics.length > 0 &&
    //     <Link href={`/challenges/grade/${gradeIndex + 1}`} key={gradeIndex}>
    //       <a style={{textDecoration: 'none'}}>
    //         <li className={styles.gradeItem}>{grade.name}</li>
    //       </a>
    //     </Link>
    //   )}
    // </ul>
  )
}

export default GradeSelector
