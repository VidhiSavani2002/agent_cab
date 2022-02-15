import React from 'react';
import { NavLink } from 'reactstrap';
import { MdSpaceDashboard,MdBorderColor,MdCollectionsBookmark,MdReport } from 'react-icons/md';
import { FaCarSide} from 'react-icons/fa';


export default [
    
    {
        id:'dashboard',
        title:'dashboard',
        icon: <MdSpaceDashboard/>,
        NavLink :'/dashboard' 
    },
    {   
        id:'orderlist',
        title:'orderlist',
        icon: <MdBorderColor/>,
        NavLink :'/orderlist' 
    },
    {
        id:'bookinglist',
        title:'bookinglist',
        icon: <MdCollectionsBookmark/>,
        NavLink :'/bookinglist' 
    },
    {
        id:'carlist',
        title:'carlist',
        icon: <FaCarSide/>,
        NavLink :'/carlist' 
    },
    {
        id:'report',
        title:'report',
        icon: <MdReport/>,
        NavLink :'/report' 
    },


]
