import React from 'react'
import { MdReorder } from 'react-icons/md';
import { FaUserMinus } from 'react-icons/fa';



function Topbar() {
    return (
        <div className="custome-topbar">
            <div className="row align-items-center">
                <div className='col-10 demo'>
                   {/* <span className='topbar-toggle'><MdReorder/></span> */}
                </div> 
                <div className='col-2 demo1'>
                    <div className='row align-items-center'>
                        <div className='col-4'>
                            <p className='topbar-p'>Jeenal bhimani</p>
                        </div>
                        <div className='col-8'>
                         <span className='topbar-toggle avatar-icon'>
                         <FaUserMinus/>
                           {/* <img 
                            src='http://nazox-h-light.angular.themesdesign.in/assets/images/users/avatar-2.jpg'
                            
                            >
                            </img> */}
                            </span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
