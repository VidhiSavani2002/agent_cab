import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Details() {
  return (
      <div className='custom-dashboard'>
          <div className='dashboard-head'>
              <h4>enter your personal details</h4>
          </div>
       <Form>
        <FormGroup row>
          <Label for="name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="name"  placeholder="enter your name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="address" sm={2}>Address</Label>
          <Col sm={10}>
            <Input type="textarea" name="address" placeholder="enter your address"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="mobileno" sm={2}>Mobile No</Label>
          <Col sm={10}>
            <Input type="text" name="mobileno"  placeholder="enter your mobile no" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="bankname" sm={2}>Bank Name</Label>
          <Col sm={10}>
            <Input type="text" name="bankname"  placeholder="enter your bankname" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="bankaccountno" sm={2}>Bank Account No</Label>
          <Col sm={10}>
            <Input type="text" name="bankaccountno"  placeholder="enter your bank accountno" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="bankifsccode" sm={2}>Bank IFSC code</Label>
          <Col sm={10}>
            <Input type="text" name="bankifsccode"  placeholder="enter your bank ifsccode" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="adharcardno" sm={2}>Adharcard No</Label>
          <Col sm={10}>
            <Input type="text" name="adharcardno"  placeholder="enter your adharcardno" />
          </Col>
        </FormGroup>

        <button type="button" class="btn btn-secondary">
            <Link to="/cardetails">Submit</Link>
        </button>
      </Form>
      </div>
  )
}
