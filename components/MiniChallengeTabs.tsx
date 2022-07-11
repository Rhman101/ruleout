import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Challenge, initialChallenge } from '../constants/gradeTopicChallengesInterface'
import gradeTopicChallenges from '../constants/gradeTopicChallenges';
import MiniChallenge from './HomePage/MiniChallenge';
import { useEffect, useState } from 'react';
import { randomNumber } from '../constants/library';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const gradeValue = ["Grade 7", "Grade 9", "Grade 12"];

const BasicTabs: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const [challenge, setChallenge] = useState(gradeTopicChallenges[0].topics[0].challenges[0])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        let grade;
        if (newValue === 0) {
            grade = gradeTopicChallenges[0];
        } else if (newValue === 1) {
            grade = gradeTopicChallenges[2];
        } else {
            grade = gradeTopicChallenges[3]
        }
        const topic = grade.topics[randomNumber(0, grade.topics.length - 1)];
        const challenge = topic.challenges[randomNumber(0, topic.challenges.length - 1)]
        setChallenge(challenge);
        setValue(newValue);
    };

    const [clientSide, setClientSide] = useState(false);

    useEffect(() => {
        setClientSide(true);
    }, [])

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Grade 7" {...a11yProps(0)} />
                    <Tab label="Grade 9" {...a11yProps(1)} />
                    <Tab label="Grade 12" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {clientSide &&
                    <MiniChallenge gradeString="Grade 7" challenge={challenge}></MiniChallenge>
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                {clientSide &&
                    <MiniChallenge gradeString="Grade 9" challenge={challenge}></MiniChallenge>
                }
            </TabPanel>
            <TabPanel value={value} index={2}>
                {clientSide &&
                    <MiniChallenge gradeString="Grade 12" challenge={challenge}></MiniChallenge>
                }
            </TabPanel>
        </Box>
    );
}

export default BasicTabs;