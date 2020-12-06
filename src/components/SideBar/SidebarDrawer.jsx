import React from 'react'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarAccount from './SidebarAccount'
import SidebarContent from './SidebarContent';

function SidebarDrawer({open, classes, handleDrawerOpen, handleDrawerClose, theme}) {
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            onMouseOver={handleDrawerOpen} 
            onMouseOut={handleDrawerClose} 
        >
        <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <MoreVertIcon />}
            </IconButton>
        </div>
        <Divider />

        {/* Account */}
        <SidebarAccount />
        <Divider />

        {/* Link Items */}
        <SidebarContent />

        <Divider />
    </Drawer>
    )
}
            
export default SidebarDrawer
