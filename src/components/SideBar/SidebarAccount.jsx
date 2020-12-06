import React, {useState} from 'react'
import { Avatar, Collapse, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { ExpandLess, ExpandMore, } from '@material-ui/icons'
import { SidebarAccountListCollapse } from '../../data/data'
import { Link } from 'react-router-dom';

const AccountListOption = () => {

    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <div className="sidebar__acount__list_option">
            <List>
                <ListItem button onClick={handleClick}>
                    <Avatar alt="name" src="" />
                    <ListItemText primary="Your name" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                {
                    SidebarAccountListCollapse.map(item => 
                        <List key={item.listItemText} component="div" className="sidebar__account__list__option" disablePadding>
                            <Link to={item.listItemPath}>
                                <ListItem button>
                                    <ListItemIcon>{item.listItemIcon}</ListItemIcon>
                                    <ListItemText primary={item.listItemText} />
                                </ListItem>
                            </Link>
                        </List>
                    )
                }
                </Collapse>
            </List>
        </div>
    )
}


function SidebarAccount() {
    return (
        <div className="sidebar__acount">
            <AccountListOption />
        </div>
    )
}

export default SidebarAccount
