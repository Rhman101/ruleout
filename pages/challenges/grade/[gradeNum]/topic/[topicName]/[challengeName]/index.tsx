import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ChallengeUI from "../../../../../../../components/ChallengeUI";
import Layout from "../../../../../../../components/Layout";
import gradeTopicChallenges from "../../../../../../../constants/gradeTopicChallenges";
import { Args, Challenge, initialChallenge } from './../../../../../../../constants/gradeTopicChallengesInterface';

const Challenge: NextPage = () => {
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();
    const [challenge, setChallenge] = useState<Challenge>(initialChallenge);
    const [generatorName, setGeneratorName] = useState('');
    const [args, setArgs] = useState<Args>({});
    useEffect(() => {
        if (router.isReady) {
            const { gradeNum, topicName, challengeName } = router.query;
            const grade = gradeTopicChallenges[Number(gradeNum)];
            const topic = grade.topics[grade.topics.findIndex((topic) => topic.topicName === topicName)]
            const challengeData = topic.challenges[topic.challenges.findIndex((elem: any) => elem.name === challengeName)];
            setGeneratorName(challengeData.generatorName);
            setChallenge(challengeData);
            setArgs(challengeData.args);
            setLoaded(true);
        }
    }, [router.isReady, router.query]);

    return <Layout>
        { loaded && <ChallengeUI settings={challenge.settings} generatorName={generatorName} args={args} ></ChallengeUI>}
    </Layout>
}

export default Challenge;
