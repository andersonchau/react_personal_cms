import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';
import React from 'react';
import BugReportIcon from '@mui/icons-material/BugReport';

export const mainNavbarItems = [
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Home',
        route: 'home',
    },
    {
        id: 2,
        icon: <PublicIcon />,
        label: 'Search Resources',
        route: 'contentMain',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Create Resource',
        route: 'createResource',
    },
    {
        id: 4,
        icon: <PublicIcon />,
        label: 'Manage HashTag',
        route: 'hashMain',
    },
    {
        id: 5,
        icon: <BugReportIcon />,
        label: 'Hashtag Category',
        route: 'createHashCategory',
    },
    {
        id: 6,
        icon: <BugReportIcon />,
        label: 'DEV Testing',
        route: 'testingPage',
    }
    
]