import React, { useEffect, useState } from "react";
import type { NextPage } from 'next'
import AppLayout from "../../components/AppLayout/AppLayout";
import gradeTopicChallenges from "../../constants/gradeTopicChallenges";
import { Challenge } from "../../constants/gradeTopicChallengesInterface";
import GTCCard from "../../components/GTCCard";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { collection, getDocs, query, QueryDocumentSnapshot, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Doc } from "../../constants/docsInterface";
import useIsSignedIn from "../../components/hooks/useIsSignedIn";

const converter = {
    toFirestore: (data: Doc) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) =>
      snap.data() as Doc
  }

const App: NextPage = () => {
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    const [docs, setDocs] = useState<Doc[] | undefined>(undefined);
    const [isSignedIn,,,email] = useIsSignedIn();
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

    return (
        <AppLayout>
            {challenge !== null && <Button variant='contained' onClick={() => setChallenge(null)}>Back</Button>}
            {challenge === null && gradeTopicChallenges.map((grade, indx) => <Stack sx={{ flexGrow: 1 }}
                alignItems="center"
                direction='column'
                key={indx}
                spacing={10}
            >
                <GTCCard GTC={grade} key={indx} completed={docs} />
            </Stack>
            )}
        </AppLayout>
    )
}

export default App
