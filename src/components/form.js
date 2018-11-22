import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {

  }


  render() {
    return (
      <div className="form-group">
        <label>Your Name*</label>
        <input
          name="name" 
          value={ this.state.name }
          onChange={ this.change }
          className="form-control" 
        />
        <small className="form-text text-muted">*required</small>
        <br />
        <label>Your Email*</label>
        <input
          name="email" 
          value={ this.state.email }
          onChange={ this.change }
          className="form-control" 
        />
        <small className="form-text text-muted">*required</small>
        <br />
        <label>Your Phone</label>
        <input
          name="phone" 
          value={ this.state.phone }
          onChange={ this.change }
          className="form-control" 
        />
        <br />
        <label>Subject</label>
        <input
          name="subject" 
          value={ this.state.subject }
          onChange={ this.change }
          className="form-control" 
        />
        <br />
        <label>Message</label>
        <textarea
          name="message" 
          value={ this.state.message }
          onChange={ this.change }
          className="form-control" 
        />
      </div>
    );
  }
}

export default Form;
