import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image'
import Link from 'next/link';
import logoImage from '../../public/ruleout-logo-light.png';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useIsSignedIn from '../hooks/useIsSignedIn';
import Stack from '@mui/material/Stack';
import AccountMenu from './AccountMenu';

const ResponsiveAppBar = () => {
    const theme = useTheme();
    const isSignedIn = useIsSignedIn();

    return (
        <Box sx={{ flexGrow: 1 }} id='scrollHere'>
            <AppBar position='static' >
                <Toolbar>
                    {/* <Typography variant='h4'>Math Button</Typography> */}
                    <Stack
                        sx={{ flexGrow: 1 }}
                        alignItems="center"
                    >
                        <Link href='/app' passHref>
                            <span>
                                <Image
                                    style={{ cursor: 'pointer' }}
                                    src={logoImage}
                                    alt="Logo"
                                    layout='fixed'
                                    priority={true}
                                    width={150}
                                    height={43}
                                />
                                <Typography
                                    variant='subtitle2'
                                    sx={{ color: `${theme.palette.primary.contrastText}`, cursor: 'pointer' }}
                                >Built for South Africa
                                </Typography>
                            </span>
                        </Link>
                    </Stack>

                    {!isSignedIn && <Link href='/login' passHref>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            color='inherit'
                            size='large'
                        >
                            Login
                        </Button>
                    </Link>}
                    {isSignedIn &&
                        <AccountMenu />

                        // <Button
                        //     sx={{ my: 2, color: 'white', display: 'block' }}
                        //     color='inherit'
                        //     size='large'
                        // >
                        //     account stuff
                        // </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default ResponsiveAppBar;
