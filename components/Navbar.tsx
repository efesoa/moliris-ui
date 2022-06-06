import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import {Button, Divider, Grid, Menu, MenuItem, Popover, Tabs, TextField} from "@mui/material";
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import SwipeMenuDrawer from "./SwipeMenuDrawer";
import {Email} from "@mui/icons-material";

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

function ScrollTop(props: Props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function MouseOverPopover() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <TextField
                aria-owns={open ? 'iris-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpen}
                variant='outlined' size='small' sx={{ width: '41%', py: 2 }} placeholder='Feedback' />

                {/*<Button*/}
                {/*    variant="text"*/}
                {/*    sx={{*/}
                {/*        ':hover': {*/}
                {/*            bgcolor: 'primary.main', // theme.palette.primary.main*/}
                {/*            color: 'white',*/}
                {/*        },*/}
                {/*    }}*/}
                {/*>*/}
                {/*    Hover*/}
                {/*</Button>*/}

            <Menu
                anchorEl={anchorEl}
                id="iris-menu"
                open={open}
                onClose={handleClose}
                onMouseLeave={handleClose}
                // MenuListProps={{ onMouseLeave: handleClose }}

                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        px: 2,

                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Box sx={{  }}>
                    <p>
                        <label style={{ color: '#808080' }} >Email</label><br/>
                        <TextField variant='outlined' size={"small"} placeholder="Your email address" fullWidth />
                    </p>
                    <p>
                        <label style={{ color: '#808080' }} >Feedback</label><br/>
                        <TextField
                            placeholder="Your feedback message"
                            multiline
                            rows={4}
                            size="small"
                            variant="outlined"
                        />
                    </p>
                </Box>

            </Menu>
        </div>
    );
}

const pages = ['Similarity', 'K-Similar Object', 'About'];

export default function Navbar(props: Props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar
                sx={{ background: '#FFFFFF',
                    color: '#808080',
                    // alignItems: 'center',
                    }}>
                    <Toolbar variant='dense'>
                        <Typography variant="h6" sx={{ pr: 10 }}>
                            Moliris
                        </Typography>
                        <Box sx={{  display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                variant="text"
                                // onClick={handleCloseNavMenu}
                                sx={{ m: 2,
                                    px: 2,
                                    textTransform: 'none',
                                    color: '#808080',
                                    // display: 'block',
                                    ':hover': {
                                        bgcolor: '#FFFFFF',
                                        color: '#000000',
                                    },
                                }}
                            >
                                <Typography>
                                    {page}
                                </Typography>
                            </Button>
                        ))}
                            {/*<TextField variant='outlined' size='small' sx={{ width: '15%', py: 2, ml: 'auto' }} placeholder='FeedBack' />*/}
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' }, ml: 'auto' }}>
                            <MouseOverPopover /></Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none', lg: 'none'}, ml: 'auto', m: 2 }}>
                            <SwipeMenuDrawer />
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
