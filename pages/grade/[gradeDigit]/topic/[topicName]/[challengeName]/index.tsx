import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ChallengeUI from "../../../../../../components/ChallengeUI";
import Layout from "../../../../../../components/Layout";
import gradeTopicChallenges from "../../../../../../constants/gradeTopicChallenges";
import { Args, Challenge, initialChallenge } from './../../../../../../constants/gradeTopicChallengesInterface';

const Challenge: NextPage = () => {
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();
    const [challenge, setChallenge] = useState<Challenge>(initialChallenge);
    const [generatorName, setGeneratorName] = useState('');
    const [args, setArgs] = useState<Args>({});
    const [gradeDigit, setGradeDigit] = useState('');
    const [topic, setTopic] = useState('');
    const [challengeText, setChallengeText] = useState('');

    useEffect(() => {
        if (router.isReady) {
            const { topicName, challengeName } = router.query;
            if (typeof (router.query.gradeDigit) === 'string') {
                setGradeDigit(router.query.gradeDigit);
            }
            if (typeof (topicName) === 'string') {
                setTopic(topicName);
            }
            typeof (challengeName) === 'string' && setChallengeText(challengeName);
            const grade = gradeTopicChallenges.find((grade) => grade.gradeDigit === gradeDigit);
            if (grade) {
                const topic = grade.topics[grade.topics.findIndex((topic) => topic.topicName === topicName)]
                const challengeData = topic.challenges[topic.challenges.findIndex((elem: any) => elem.name === challengeName)];
                setGeneratorName(challengeData.generatorName);
                setChallenge(challengeData);
                setArgs(challengeData.args);
                setLoaded(true);
            }
        }
    }, [gradeDigit, router.isReady, router.query]);

    return <Layout>
        {loaded && <ChallengeUI
            settings={challenge.settings}
            generatorName={generatorName}
            args={args}
            grade={gradeDigit}
            topic={topic}
            challenge={challengeText}
        ></ChallengeUI>}
    </Layout>
}

export default Challenge;
