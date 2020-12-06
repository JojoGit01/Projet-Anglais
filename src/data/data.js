import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';
import MapIcon from '@material-ui/icons/Map';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const SidebarAccountListCollapse = [
    {
        listItemPath: '/profil',
        listItemText: "My profile",
        listItemIcon: <AccountCircleIcon />,
        eventKey: 'profile'
    },
    {
        listItemPath: '/editProfil',
        listItemText: "Edit profile",
        listItemIcon: <EditIcon />,
        eventKey: 'editprofile'
    },
    {
        listItemPath: '/setting',
        listItemText: "Settings",
        listItemIcon: <SettingsIcon />,
        eventKey: 'settings'
    },
]

export const SidebarContentData = [
    {
        path: '/',
        icon: <DashboardIcon />,
        label: "Dashboard"
    },
    {
        path: '/map',
        icon: <MapIcon />,
        label: "Map"
    },
    {
        divider: "escape"
    },
    {
        path: '/login',
        icon: <LockOpenIcon />,
        label: "Login"
    },
    {
        path: '/register',
        icon: <VpnKeyIcon />,
        label: "Register"
    },

]