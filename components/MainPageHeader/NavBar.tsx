import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image'
import Link from 'next/link';
import logoImage from '../../public/ruleout-logo-light.png';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';


const pages = [{
    name: 'Why it works',
    id: 'whyItWorks',
}, {
    name: 'Try it!',
    id: 'tryIt'
}, {
    name: 'Get In Touch',
    id: 'getInTouch'
}]


const fadeInB = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const ResponsiveAppBar: React.FC<{isLoginPage: boolean}> = ({isLoginPage}) => {
    const StandoutTextB = styled(Typography)(({ theme }) => ({
        textAlign: 'center',
        animation: `${fadeInB} 2s`,
        color: `${theme.palette.primary.contrastText}`
    }))

    return (
        <Grid item xs={12}>

            <Toolbar disableGutters>

                <Link href='/' passHref>
                    <div style={{ margin: '25px', cursor: 'pointer' }}>
                        <Image
                            src={logoImage}
                            alt="Logo"
                            layout='fixed'
                            priority={true}
                            width={200}
                            height={58}
                        />
                        <StandoutTextB variant='subtitle1'>Built for South Africa</StandoutTextB>
                    </div>
                </Link>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                    {!isLoginPage && pages.map((page) => (<Button
                        key={page.name}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        color='inherit'
                        size='large'
                        onClick={() => document.getElementById(page.id)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {page.name}
                    </Button>
                    ))}
                </Box>
                    <Link href='/login' passHref>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            color='inherit'
                            size='large'
                        >
                            Login
                        </Button>
                    </Link>
            </Toolbar>
        </Grid>
    );
};
export default ResponsiveAppBar;
