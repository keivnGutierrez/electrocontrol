import React from 'react';
import clsx from 'clsx';
import { List, makeStyles, SwipeableDrawer, ListItemText, ListItemIcon, ListItem, IconButton } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import useTheme from '../../const/Theme';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SwipeableTemporaryDrawer() {
    const theme = useTheme();
    // console.log(theme);
    const classes = useStyles();
    const [state, setState] = React.useState(false);
    const handleClickToNav = ( to) => {
        const anchor = document.querySelector(to);
        setTimeout(() => {
            anchor.scrollIntoView({ behavior: "smooth" });
        }, 300)
    }


    const listNavItem = [
        {
            'title': 'Servicios',
            'icon': BuildRoundedIcon,
            'link': '#services'
        },
        {
            'title': 'Galeria',
            'icon': PhotoLibraryIcon,
            'link': '#galery'
        },
        {
            'title': 'Oficinas',
            'icon': RoomIcon,
            'link': '#office'
        }
    ];

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            
        >
            
            <List>
                {
                    listNavItem.map((item, index) => (
                        <ListItem button key={index} onClick={() => handleClickToNav (item.link)}  >
                            <ListItemIcon>
                                {<item.icon fontSize='large' />}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))
                }
            </List>
        </div >
    );

    return (
        <div id="back-to-top-anchor"  style={{ display: 'flex', height: '10vh', padding: '0vh 4vw', alignItems: 'center', justifyContent: 'space-between' }} >

            <img src={theme.LOGO} alt='Electrocontrol logo' style={{ width: 170 }} />
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={{ color: '#58555A' }}
                onClick={toggleDrawer(true)}
                color="inherit"
            >
                <img src={theme.MENU} style={{ width: 22, height: 22 }} alt='menu' />
            </IconButton>
            <SwipeableDrawer
                open={state}
                anchor='right'
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >

                <div
                    style={{ display: 'flex', justifyContent: 'flex-end', }}
                >
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        style={{ color: '#001746', width: '3vw', marginRight: '10px' }}
                        onClick={toggleDrawer(false)}
                        color="inherit"
                    >
                        <CloseRoundedIcon />
                    </IconButton>
                </div>
                {list()}
            </SwipeableDrawer>
        </div>
    );
}