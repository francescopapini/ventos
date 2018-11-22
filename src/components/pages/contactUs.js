import React, { Component } from 'react'
import Form from '../form.js' 

class ContactUs extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Bookings</h1>
        <p>
          To book your amazing holiday or for any questions please give us a call 
          or fill the form below and we will get back to you shortly. 
        </p>
        <div className="row">
          <div className="col-md-6">
            <Form />  
          </div>
          <div className="col-md-6">
            <p>Contact numbers here</p>  
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
 