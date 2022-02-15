import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { MdSpaceDashboard,MdBorderColor,MdCollectionsBookmark,MdReport } from 'react-icons/md';
import { FaCarSide} from 'react-icons/fa';
// import SidebarIndex from './SidebarIndex';


function Sidebar() {

return (
     <>
     <div className='sidebar-page'>
         <div className='sidebar-logo'>LOGO</div>
         <div className='sidebar-content'>
         <Nav vertical>
          <NavItem>
            <NavLink href="/home"><span className='sidebar-icon'> <MdSpaceDashboard/> </span>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/orderlist"><span className='sidebar-icon'> <MdBorderColor/> </span>Order list</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/bookinglist"><span className='sidebar-icon'> <MdCollectionsBookmark/> </span>Booking list</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/carlist"><span className='sidebar-icon'> <FaCarSide/> </span>Car list</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/report"><span className='sidebar-icon'> <MdReport/> </span>Report</NavLink>
          </NavItem>
        </Nav>
     </div>
       
     </div>
     </>
  )
}
export default Sidebar;
