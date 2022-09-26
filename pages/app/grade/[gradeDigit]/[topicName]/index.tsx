import React, { useEffect, useState } from "react";
import type { NextPage } from 'next';
import AppLayout from '../../../../../components/AppLayout/AppLayout';
import gradeTopicChallenges from '../../../../../constants/gradeTopicChallenges';
import GTCCard from '../../../../../components/GTCCard';
import Stack from "@mui/material/Stack";
import { GradeTopicChallenge, Topic } from "../../../../../constants/gradeTopicChallengesInterface";
import { useRouter } from "next/router";
import useIsSignedIn from "../../../../../components/hooks/useIsSignedIn";
import { collection, getDocs, query, QueryDocumentSnapshot, where } from "firebase/firestore";
import { db } from "../../../../../firebase/firebase";
import { Doc } from "../../../../../constants/docsInterface";

const converter = {
  toFirestore: (data: Doc) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) =>
    snap.data() as Doc
}

const TopicPage: NextPage = (props: any) => {
  const router = useRouter();
  const [GTC, setGTC] = useState<GradeTopicChallenge | undefined>(undefined)
  const [isSignedIn,,,email] = useIsSignedIn();
  const [docs, setDocs] = useState<Doc[] | undefined>(undefined);

  useEffect(() => {
    if (
      router.isReady
      &&
      router.query.gradeDigit
      &&
      router.query.topicName
    ) {
      for (let i = 0; i < gradeTopicChallenges.length; i++) {
        let grade = gradeTopicChallenges[i];
        for (let k = 0; k < grade.topics.length; k++) {
          let topic = grade.topics[k];
            if (
              grade.gradeDigit === router.query.gradeDigit
              &&
              topic.topicName === router.query.topicName
              ) {
                setGTC({
                  topics: [topic], 
                  gradeDigit: grade.gradeDigit,
                  name: grade.name,
                })
            }
        }
      }
    }
  }, [router]);

  useEffect(() => {
    (async() => {
    if (isSignedIn) {
        const completed_challenges = collection(db, "completed_challenges").withConverter(converter);
        const q = query(completed_challenges, where('email', '==', email))
        const querySnapShot = await getDocs(q);
        const ds: Doc[] = []
        querySnapShot.forEach((doc) => {
            ds.push(doc.data())
        });
        setDocs(ds);
    }
    })();
}, [email, isSignedIn])

  return <AppLayout>
    <Stack sx={{ flexGrow: 1 }}
      alignItems="center"
      direction='column'
      spacing={10}
    >
      {GTC !== undefined && <GTCCard GTC={GTC} completed={docs} />}
    </Stack>
  </AppLayout>
}

export default TopicPage
