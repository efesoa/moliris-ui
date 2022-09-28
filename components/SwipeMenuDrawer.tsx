import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from "next/link";
import {useRouter} from "next/router";
import {IconButton, MenuItem} from "@mui/material";

type Anchor = 'left';

export default function SwipeableMenuDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const routes = [
        {
            id: 1,
            label:'Similarity',
            path: '/Similarity',
            // icon: HomeIcon
        },
        {
            id: 2,
            label: 'K-Similar Object',
            path: '/K-SimilarObject',
            // icon: LoginIcon
        },
        {
            id: 3,
            label: 'About',
            path: '/About',
            // icon: RegisterIcon
        }
    ];

    const router = useRouter();

    const activeRoute = (routeName: string, currentRoute: string) => {
        return routeName === currentRoute? true : false;
    }

    const list = (anchor: Anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box sx={{ ml: 20 }}>
                <IconButton onClick={toggleDrawer(anchor, false)} >
                    <CloseOutlinedIcon />
                </IconButton>
            </Box>
            <Divider />
            <List>
                {routes.map((item, index) => (
                    <Link href={item.path} style={{ textDecoration: 'none', color: '#808080' }} key={item.id}>
                        <ListItem key={item.id} disablePadding selected={activeRoute(item.path, router.pathname)}>
                            <ListItemButton>
                                {/*<ListItemIcon>*/}
                                {/*    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                                {/*</ListItemIcon>*/}
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>

            <Divider />
            <List>
                {routes.map((item, index) => (
                    <Link  href={item.path} style={{ textDecoration: 'none', color: 'black' }} key={item.id}>
                        <MenuItem selected={activeRoute(item.path, router.pathname)}>
                            <ListItem button key={item.id} >
                                {/*<ListItemIcon> <item.icon /> </ListItemIcon>*/}
                                <ListItemText primary={item.label} />
                            </ListItem>
                        </MenuItem>
                    </Link>

                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                        <MenuOutlinedIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
