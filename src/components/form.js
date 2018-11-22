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

  render() {
    return (
      <div className="form-group">
        <label>Your Name*</label>
        <input
          name="name" 
          placeholder="Your Name"
          value={ this.state.name }
          onChange={ e => this.change(e) }
          className="form-control" 
        />
        <small className="form-text text-muted">*required</small>
        <label>Your Email*</label>
        <input
          name="email" 
          placeholder="Your Email"
          value={ this.state.email }
          onChange={ e => this.change(e) }
          className="form-control" 
        />
        <small className="form-text text-muted">*required</small>
        <label>Your Phone</label>
        <input
          name="phone" 
          placeholder="Your Phone"
          value={ this.state.phone }
          onChange={ e => this.change(e) }
          className="form-control" 
        />
        <label>Subject</label>
        <input
          name="subject" 
          placeholder="Subject"
          value={ this.state.subject }
          onChange={ e => this.change(e) }
          className="form-control" 
        />
        <label>Message</label>
        <textarea
          name="message" 
          placeholder="Message"
          value={ this.state.message }
          onChange={ e => this.change(e) }
          className="form-control" 
        />
      </div>
    );
  }
}

export default Form;
