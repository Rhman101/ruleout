import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import gradeTopicChallenges from '../../constants/gradeTopicChallenges';
import Link from 'next/link';

const Layout: React.FC<{}> = ({ children }) => {
    // const [value, setValue] = useState(1);
    // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    //     // console.log(newValue);
    //     if (value) {
    //         setValue(Number(newValue));
    //     }
    // };

    return (
        <Box sx={{ width: '100%' }}>
            {/* {gradeTopicChallenges.map((grade, gradeIndex) => {
                return <Link key={gradeIndex} href={`/challenges/grade/${Number(gradeIndex) + 1}`} passHref>
                  <NavDropdown.Item>{grade.name}</NavDropdown.Item>
                </Link>
              })} */}
            <Tabs
                // value={value}
                // onChange={handleChange}
                textColor="primary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                {gradeTopicChallenges.map((grade, gradeIndx) => {
                    return <Link key={gradeIndx} href={`/challenges/grade/${Number(gradeIndx) + 1}`} passHref>
                        <Tab
                            value={gradeIndx}
                            label={grade.name}
                        />
                    </Link>
                }
                )}
                {/* <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" /> */}
            </Tabs>
        </Box>
    );

};

export default Layout;