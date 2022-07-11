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
import AccountCircle from '@mui/icons-material/AccountCircle';

import Link from 'next/link';
import GradeBar from './GradeBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import { Stack, TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { UserContext } from '../../pages/_app';

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
    name: 'FYI',
    href: '/FYI'
}]

const logo = 'RuleOUT';

function LoggedInMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const user = useContext(UserContext);

    const handleClose = () => {
        setAnchorEl(null);

    };

    const handleLogout = () => {
        handleClose();
        user.logout(user.userObject.token);
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
            >
                <AccountCircle />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

function NotLoggedInMenu() {
    const [hasAccount, setHasAccount] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passOne, setPassOne] = useState('');
    const [passTwo, setPassTwo] = useState('');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleValidateEmail = () => {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }

    const handleValidatePassword = () => {
        return true;
        // let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        // return regex.test(passOne);
    }

    const validateAccountInput = () => {
        if (!handleValidateEmail()) { return false };
        if (!handleValidatePassword()) { return false };
        if (!hasAccount) {
            if (name.length === 0) { return false };
            if (!(passOne === passTwo)) { return false };
        }
        return true;
    }

    const user = useContext(UserContext);

    const handleCreateAccount = async () => {
        // const user = await createUser(name, email, passOne);
        user.createAccount(name, email, passOne);
    }

    const handleLogin = async () => {
        user.login(email, passOne);
    }
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
            >
                LOG IN
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Stack
                    component="form"
                    sx={{
                        width: '25ch',
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"
                >
                    {hasAccount && <>
                        <Typography sx={{ padding: '10px' }}>Log In: </Typography>
                        <TextField
                            error={email.length > 5 && !handleValidateEmail()}
                            sx={{ padding: '10px' }}
                            type='text'
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => e.key === 'Tab' && e.stopPropagation()}
                        />
                        <TextField
                            error={passOne.length > 3 && !handleValidatePassword()}
                            helperText={(passOne.length > 3 && !handleValidatePassword()) && 'Password must contain at least one uppercase, one lowercase and one numeric character.'}
                            sx={{ padding: '10px' }}
                            type='password'
                            label="Password"
                            variant="outlined"
                            value={passOne}
                            onChange={(e) => setPassOne(e.target.value)}
                            onKeyDown={(e) => e.key === 'Tab' && e.stopPropagation()}
                        />
                        {user.userObject.loginError &&
                            <Typography sx={{ padding: '10px', color: 'red' }}>{user.userObject.loginError}</Typography>
                        }
                        <Button
                            variant='contained'
                            disabled={!validateAccountInput()}
                            onClick={() => handleLogin()}
                        >Submit</Button>
                        <Button variant='contained' onClick={() => setHasAccount(false)}>Create Account</Button>
                    </>}
                    {!hasAccount && <>
                        <Typography sx={{ padding: '10px' }}>Create Account: </Typography>
                        <TextField
                            sx={{ padding: '10px' }}
                            type='text'
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Tab' && e.stopPropagation()}
                        />
                        <TextField
                            error={email.length > 5 && !handleValidateEmail()}
                            sx={{ padding: '10px' }}
                            type='text'
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => e.key === 'Tab' && e.stopPropagation()}
                        />
                        <TextField
                            error={passOne.length > 3 && !handleValidatePassword()}
                            helperText={(passOne.length > 3 && !handleValidatePassword()) && 'Password must contain at least one uppercase, one lowercase and one numeric character.'}
                            sx={{ padding: '10px' }}
                            type='password'
                            label="Password"
                            variant="outlined"
                            value={passOne}
                            onChange={(e) => setPassOne(e.target.value)}
                            onKeyDown={(e) => e.key === 'Tab' && e.stopPropagation()}
                        />
                        <TextField
                            error={passTwo.length > 3 && !(passOne === passTwo)}
                            helperText={(passTwo.length > 3 && !(passOne === passTwo)) && 'Passwords must match.'}
                            sx={{ padding: '10px' }}
                            type='password'
                            label="Retype Password"
                            variant="outlined"
                            value={passTwo}
                            onChange={(e) => setPassTwo(e.target.value)}
                            onKeyDown={(e) => e.key === 'Tab' && e.stopPropagation()}
                        />
                        <Button
                            variant='contained'
                            disabled={!validateAccountInput()}
                            onKeyDown={(e) => e.key === 'Tab' && e.stopPropagation()}
                            onClick={() => handleCreateAccount()}
                        >Submit</Button>
                        <Button variant='contained' onClick={() => setHasAccount(true)}>Have Account</Button>
                    </>}

                </Stack>
            </Menu>
        </div>
    );
}


const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const user = useContext(UserContext);

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
                            {user.userObject.email.length > 0 ?
                                <LoggedInMenu />
                                :
                                <NotLoggedInMenu />
                            }
                        </Toolbar>
                        <GradeBar></GradeBar>
                    </Container>
                </AppBar>
            </Grid>
        </Box>
    );
};
export default ResponsiveAppBar;
