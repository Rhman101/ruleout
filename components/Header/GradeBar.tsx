import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import gradeTopicChallenges from '../../constants/gradeTopicChallenges';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';

const Layout: React.FC<{}> = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        if (value) {
            setValue(Number(newValue));
        }
    };

    const router = useRouter();

    useEffect(() => {
        const { gradeDigit } = router.query;
        if (gradeDigit) {
            setValue(gradeTopicChallenges.findIndex((grade) => grade.gradeDigit === gradeDigit))
        }
        
    }, [router.query])


    return (
        <Grid item sm={12}>
            <Box sx={{ width: '100%', flexGrow: 1 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    {gradeTopicChallenges.map((grade, gradeIndx) => {
                        return <Link key={gradeIndx} href={`/grade/${grade.gradeDigit}`} passHref>
                            <Tab
                                value={grade.gradeDigit}
                                label={grade.name}
                            />
                        </Link>
                    }
                    )}
                </Tabs>
            </Box>
        </Grid>
    );

};

export default Layout;