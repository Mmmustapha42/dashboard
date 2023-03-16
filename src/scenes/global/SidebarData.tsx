import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TableChartIcon from '@mui/icons-material/TableChart';


interface SidebarItem {
    title: string,
    icon: React.ReactNode
    link: string;
  }

  type Sidebar = {
    name: {
    title:'string',
    icon: React.ReactNode,
    link:string
}[]
  }


export const SidebarData = [
    {
        title:'Manage team',
        icon:<PeopleIcon/>,
        link:'/team'
    },
    {
        title:'Contacts information',
        icon:<ContactsIcon/>,
        link:'/contacts'
    },
    {
        title:'Invoices Balances',
        icon:<ReceiptIcon/>,
        link:'/invoices'
    }
]

export const pages =[
    {
        title:'Profile Form',
        icon:<PersonOutlineIcon/>,
        link:'/form'
    },
    {
        title:'Calendar',
        icon:<CalendarMonthIcon/>,
        link:'/calendar'
    },
    {
        title:'FAQ Page',
        icon:<HelpOutlineIcon/>,
        link:'/faq'
    }

]

export const charts = [
    {
        title:'Bar Chart',
        icon:<BarChartIcon/>,
        link:'/bar-chart'
    },
    {
        title:'Pie Chart',
        icon:<PieChartIcon/>,
        link:'pie-chart'
    },
    {
        title:'Line Chart',
        icon:<ShowChartIcon/>,
        link:'/line-chart'
    },
    {
        title:'Geography Chart',
        icon:<TableChartIcon/>,
        link:'/geography'
    }
]
 
