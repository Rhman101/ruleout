import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'
import logoImage from '../../public/logo.webp';


import Link from 'next/link';
import GradeBar from './GradeBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const pages = [{
    name: 'How It Works',
    href: '/how'
}, {
    name: 'Bio',
    href: '/bio'
}, {
    name: 'Tech Stack',
    href: '/stack'
}, {
    name: 'Support this work',
    href: '/support'
}]

const logo = 'RuleOUT';

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                <AppBar position="fixed">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            {/* Logo to display on sm and bigger. */}
                            <Image
                                src={logoImage}
                                alt="Logo"
                                // width={75}
                                // height={45}
                                priority
                                width={85}
                                height={56.8}
                                placeholder='blur'
                            />

                            <Link href='/' passHref>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="div"
                                    sx={{ paddingLeft: '12px', cursor: 'pointer', mr: 2, display: { xs: 'none', sm: 'flex' } }}
                                >
                                    {logo}
                                </Typography>
                            </Link>


                            {/* Box that displays when three lines are clicked on xs only. */}
                            {/* Box contains menu items.  */}

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    <Link href='/' passHref>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">Home</Typography>
                                        </MenuItem>
                                    </Link>
                                    {pages.map((page) => (
                                        <Link key={page.name} href={page.href} passHref>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center">{page.name}</Typography>
                                            </MenuItem>
                                        </Link>
                                    ))}
                                </Menu>
                            </Box>

                            {/* Logo to display on xs only. */}
                            <Link href='/' passHref>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="div"
                                    sx={{ cursor: 'pointer', flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}
                                >
                                    {logo}
                                </Typography>
                            </Link>

                            {/* This box is to keep the xs logo in the middle and it's a placeholder for a future menu. */}
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}></Box>
                            <Box sx={{ flexGrow: 1 }} />
                            {/* Box to display on sm and bigger. */}
                            {/* Box displays menu items in header. */}
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                                {pages.map((page) => (
                                    <Link href={page.href} passHref key={page.name}>
                                        <Button
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            {page.name}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                        </Toolbar>
                        <GradeBar></GradeBar>
                    </Container>
                </AppBar>
            </Grid>
        </Box>
    );
};
export default ResponsiveAppBar;
