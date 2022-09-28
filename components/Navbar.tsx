import * as React from 'react';
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import {Button, Divider, Grid, Menu, TextField} from "@mui/material";
import SwipeMenuDrawer from "./SwipeMenuDrawer";
import {useRouter} from "next/router";
import {createTheme, ThemeProvider} from '@mui/material/styles';


interface Props {
    window?: () => Window;
    children: any;
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
        style: { backgroundColor: trigger ? '#fff' : 'transparent'}
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

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

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
            <Button
                aria-owns={open ? 'iris-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpen}
                variant='outlined'
                sx={{ textTransform: 'none', color: '#808080', borderColor: '#808080',
                    ':hover': { color: '#8973ff', borderColor: '#8973ff'} }}
            >
                Feedback
            </Button>

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
                <form action="" method="post">
                    <p>
                        <label style={{ color: '#808080' }} >Email</label><br/>
                        <TextField type='email' variant='outlined' size={"small"} placeholder="Your email address" fullWidth />
                    </p>
                    <p>
                        <label style={{ color: '#808080' }} >Feedback</label><br/>
                        <TextField
                            type='text'
                            placeholder="Your feedback message"
                            multiline
                            rows={4}
                            size="small"
                            variant="outlined"
                        />
                    </p>
                    <Divider />
                    <Box sx={{ pl: 23, pt: 1 }} >
                        <Button type='submit' variant='contained' sx={{ textTransform: 'none' }} size='small'>Submit</Button>
                    </Box>
                </form>

            </Menu>
        </div>
    );
}

const theme = createTheme({
    typography: {
        fontFamily: 'Ubuntu',
    },
});


export default function Navbar(props: Props) {
    const router = useRouter();

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar sx={{ color: '#808080' }}>
                    <Toolbar variant='dense'>
                        <ThemeProvider theme={theme}>
                            <Grid container
                                  direction="row"
                                  alignItems="center"
                                  spacing={7}
                                  sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' }, py: 2 }}
                            >
                                <Grid item>
                                    <Typography variant="h6" sx={{ pr: 9 }}>
                                        <Link href='/'  >
                                            <a>Moliris</a>
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ ':hover': {color: '#000000'} }} >
                                        <Link href='/Similarity'  >
                                            <a className={router.pathname == "/Similarity" ? "active" : ""} >Similarity</a>
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ ':hover': {color: '#000000'} }}>
                                        <Link href='/K-SimilarObject' >
                                            <a className={router.pathname == "/K-SimilarObject" ? "active" : ""}>
                                                K-Similar Object
                                            </a>
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ ':hover': {color: '#000000'} }}>
                                        <Link href='/About' >
                                            <a className={router.pathname == "/About" ? "active" : ""}>About</a>
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ ml: 'auto' }}>
                                    <MouseOverPopover />
                                </Grid>
                            </Grid>

                            <Grid container
                                  direction="row"
                                  justifyContent="space-between"
                                  alignItems="center"
                                  sx={{ display: { xs: 'flex', md: 'none', lg: 'none'}, py: 2 }}
                            >
                                <Grid item >
                                    <SwipeMenuDrawer />
                                </Grid>
                                <Grid item >
                                    <Typography variant="h6" >
                                        <Link href='/'  >
                                            <a>Moliris</a>
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <MouseOverPopover />
                                </Grid>
                            </Grid>
                        </ThemeProvider>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab sx={{ borderRadius: 2, bgcolor:'rgba(99,49,241,0.47)', ':hover': { bgcolor: '#8973ff'} }} size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
