import React from 'react';
import { Col, FormText, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Details() {
  return (
      <div className='custom-dashboard'>
          <div className='dashboard-head'>
              <h4>enter your car details</h4>
          </div>
       <Form>
       <FormGroup row>
          <Label for="carname" sm={2}>Car Name</Label>
          <Col sm={10}>
            <Input type="text" name="carname"  placeholder="enter name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>Car Image </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="carplateno" sm={2}>Car PlateNo</Label>
          <Col sm={10}>
            <Input type="text" name="carplateno"  placeholder="enter plateno" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="carpickupaddress" sm={2}>Car PickupAddress</Label>
          <Col sm={10}>
            <Input type="text" name="carpickupaddress"  placeholder="enter pickup address" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="pincode" sm={2}>Car Pincode</Label>
          <Col sm={10}>
            <Input type="text" name="pincode"  placeholder="enter pincode" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="cardropaddress" sm={2}>Car PickupAddress</Label>
          <Col sm={10}>
            <Input type="text" name="cardropaddress"  placeholder="enter drop address" />
          </Col>
        </FormGroup>
        {/* here set dropdown */}
        <FormGroup>
          <Label for="cartype">Car Type</Label>
          <Input type="select" name="cartype">
            <option>micro</option>
            <option>micro</option>
            <option>sedan</option>
            <option>sedan</option>
            <option>sedan</option>
          </Input>
        </FormGroup>
        {/* here set dropdown */}
        <FormGroup>
          <Label for="fueltype">Fuel Type</Label>
          <Input type="select" name="fueltype">
            <option>petrol</option>
            <option>diesel</option>
          </Input>
        </FormGroup>
        {/* here set dropdown */}
        <FormGroup>
          <Label for="transmissiontype">Transmission Type</Label>
          <Input type="select" name="transmissiontype">
            <option>auto</option>
            <option>Manual</option>
          </Input>
        </FormGroup>
        {/* here set dropdown */}
        <FormGroup>
          <Label for="baggage">Baggage</Label>
          <Input type="select" name="baggage" >
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="seater">seater</Label>
          <Input type="select" name="seater" >
            <option>5</option>
            <option>7</option>
          </Input>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>Insurance Upload </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        
       
        
       <button type="button" class="btn btn-secondary">
            <Link to="/cardetails">Carlist added</Link>
        </button>
      </Form>
      </div>
  )
}
