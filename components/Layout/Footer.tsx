import Grid from "@mui/material/Grid";
import ruanPhoto from './../../public/ruan.jpeg';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import MailIcon from '@mui/icons-material/Mail';
import IconButton from "@mui/material/IconButton";

const Footer: React.FC<{}> = () => {
    const theme = useTheme();
    return <footer id='getInTouch' style={{
        position: 'relative',
        bottom: 0,
        left: 0,
        width: '100%'
    }}>
        <Grid container spacing={5} sx={{ padding: '50px', background: `${theme.palette.primary.light}` }} id='techStack'>
            <Grid item sm={6}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={15}
                >
                    <Image
                        src={ruanPhoto}
                        alt='South African Flag'
                        layout='fixed'
                        width={195}
                        height={260}
                    ></Image>
                </Stack>
            </Grid>
            <Grid item sm={6}>
                <Typography variant='h4' sx={{ margin: '10px' }} color={theme.palette.getContrastText(theme.palette.primary.light)}>Get in touch</Typography>
                <Typography sx={{ margin: '10px' }} color={theme.palette.getContrastText(theme.palette.primary.dark)}>
                    I am Ruan Huysen, a software developer and Grade 12 mathematics teacher with a passion for
                    improving the mathematics skills of ordinary South Africans.
                </Typography>
                <Typography sx={{ margin: '10px' }} color={theme.palette.getContrastText(theme.palette.primary.light)}>
                    If you have any ideas or suggestions, reach out to me by clicking on the icon below. I look forward to chatting to you.
                </Typography>
                <IconButton aria-label='rhuysen@gmail.com' href='mailto:rhuysen@gmail.com'>
                    <MailIcon fontSize='large'></MailIcon>
                </IconButton>

            </Grid>
        </Grid>
    </footer>

};

export default Footer;