import React from 'react'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import {Row,Col} from 'react-bootstrap';
// import Details from '../../pages/dashboard/Details';

function Index({children}) {
    return (
        <div>   
         <Row>  
         <Col lg={2} className='sidebar-list'><Sidebar/></Col>
         <Col lg={10} className='topbar-list'>
             <Topbar/>
             <Row>
                 <Col>
                    <main>{children}</main>
                 </Col>
             </Row>
        </Col>
         </Row> 
  </div>
    )
}

export default Index

