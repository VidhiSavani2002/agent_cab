import React from 'react';

//import css
import './assets/css/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Route, Routes
  } from "react-router-dom";

//import router list
import { route_list } from "../src/routes/index";
import Layout from "./components/layout/index";

// import react -bootsrap 
import {Row,Col} from 'react-bootstrap';

function App() {
    return (
        <>
  <Row>
    <Col className='custom-sidebar'>
        <Layout>
 
  <Row>
  <Col className='custom-layout'>
    <Routes>     
            {route_list.map((route) => {
            return (
            <>
              <Route exact path={route.url} element={route.component}  />
            </>
            )  
        })}
        </Routes>
    </Col>
  </Row>
  </Layout>
  </Col>
  </Row>
  </>
    );
}

export default App;