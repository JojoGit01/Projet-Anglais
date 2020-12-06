import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarContentData } from '../../data/data'
import { Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'


function SidebarContent() {
    return (
        <div className="sidebar__content">
        {
            SidebarContentData.map(item => (
                item.divider === "escape" 
                ? 
                <Divider/> 
                :
                <div key={item.label} className="sidebar__account__list__option">
                    <Link to={item.path}>
                        <ListItem button>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    </Link>
                </div>
            ))
        }
        </div>
    )
}

export default SidebarContent
