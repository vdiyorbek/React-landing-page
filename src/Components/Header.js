import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
const useStyle = makeStyles((theme) => ({
    root: {
        display: `flex`,
        justifyContent: `center`,
        height: `100vh`,
        fontFamily: 'Nunito',
        alignItems: `center`
    },
    appbar: {
        background: `none`
    },
    appbarWrapper: {
        width: `80%`,
        margin: `0 auto`
    },
    appbarTitle: {
        flexGrow: `1`,
    },
    colorText: {
        color: `#5AFF3D`
    },
    icon: {
        color: `#fff`,
        fontSize: `2rem`,
    },
    container: {
        textAlign: `center`,
    },
    title: {
        color: `#fff`,
        fontSize: `4.5rem`
    },
    goDown: {
        color: `#5AFF3D`,
        fontSize: `2rem`,

    },
}))
export default function Header() {
    const classes = useStyle();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} evelation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>My<spam className={classes.colorText}>Island.</spam></h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})} collapsedheight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br />My<spam className={classes.colorText}>Island.</spam>
                    </h1>
                    <Scroll to='place-to-visit' smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}