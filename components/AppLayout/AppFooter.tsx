import Grid from "@mui/material/Grid";
import ruanPhoto from './../../public/ruan.jpeg';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import MailIcon from '@mui/icons-material/Mail';
import IconButton from "@mui/material/IconButton";

const AppFooter: React.FC<{}> = () => {
    const theme = useTheme();
    return <footer id='getInTouch' style={{
        position: 'relative',
        bottom: 0,
        left: 0,
        width: '100%'
    }}>
        <Stack
            sx={{ background: `${theme.palette.primary.light}`, padding: '15px' }}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}
        >
            <Grid container spacing={3}>
                <Grid item xs={4} md={4} sx={{ direction: 'rtl' }}>
                    <Image
                        // style={{ display: '50px' }}
                        src={ruanPhoto}
                        alt='South African Flag'
                        layout='fixed'
                        width={97.5}
                        height={130}
                    ></Image>
                </Grid>
                <Grid item xs={8} md={8}>
                    <Typography variant='h6' sx={{ margin: '10px' }} color={theme.palette.getContrastText(theme.palette.primary.light)}>Get in touch</Typography>
                    <Typography sx={{ margin: '10px' }} color={theme.palette.getContrastText(theme.palette.primary.dark)}>
                        Contact: 0726894418 / +27726894418
                    </Typography>
                    <IconButton aria-label='rhuysen@gmail.com' href='mailto:rhuysen@gmail.com'>
                        <MailIcon fontSize='medium'></MailIcon>
                    </IconButton>
                </Grid>
            </Grid>
            <Typography sx={{ margin: '10px', padding: '0px' }} color={theme.palette.getContrastText(theme.palette.primary.dark)}>
                I am actively developing RuleOUT and would LOVE to hear from you if you feel that some questions were too hard or too easy! Or if you have any suggestions of any kind.
            </Typography>
        </Stack>
    </footer>

};

export default AppFooter;