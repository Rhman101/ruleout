import React, { useEffect, useState } from "react";
import type { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import AppLayout from '../../../../components/AppLayout/AppLayout';
import gradeTopicChallenges from '../../../../constants/gradeTopicChallenges';
import GTCCard from '../../../../components/GTCCard';
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { GradeTopicChallenge } from "../../../../constants/gradeTopicChallengesInterface";
import Typography from "@mui/material/Typography";
import useIsSignedIn from "../../../../components/hooks/useIsSignedIn";
import { collection, getDocs, query, QueryDocumentSnapshot, where } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { Doc } from "../../../../constants/docsInterface";

const converter = {
  toFirestore: (data: Doc) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) =>
    snap.data() as Doc
}

const GradePage: NextPage = (props: any) => {
  const router = useRouter();
  const [error, setError] = useState(false)
  const [GTC, setGTC] = useState<GradeTopicChallenge | undefined>(undefined)
  const [isSignedIn,,,email] = useIsSignedIn();
  const [docs, setDocs] = useState<Doc[] | undefined>(undefined);
  
  useEffect(() => {
    if (router.isReady) {
      let x = gradeTopicChallenges.find((grade) => grade.gradeDigit === router.query.gradeDigit);
      if (x !== undefined) {
        setGTC(x);
      } else {
        setError(true);
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
      {error && <Typography>{`Grade doesn't exist. Please check URL or just go "back"`}</Typography>}
    </Stack>
  </AppLayout>
}

export default GradePage
