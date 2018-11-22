import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  render() {
    return (
      <div className="form-group">
        <label>Your Name*</label>
        <input
         placeholder="Your Name"
         value={ this.state.name }
         onChange={ e => this.setState({ name: e.target.value})}
         className="form-control" 
        />
        <small className="form-text text-muted">*required</small>
        <label>Your Email*</label>
        <input
         placeholder="Your Email"
         value={ this.state.email }
         onChange={ e => this.setState({ email: e.target.value})}
         className="form-control" 
        />
        <small className="form-text text-muted">*required</small>
        <label>Your Phone</label>
        <input
         placeholder="Your Phone"
         value={ this.state.phone }
         onChange={ e => this.setState({ phone: e.target.value})}
         className="form-control" 
        />
        <label>Subject</label>
        <input
         placeholder="Subject"
         value={ this.state.subject }
         onChange={ e => this.setState({ subject: e.target.value})}
         className="form-control" 
        />
        <label>Message</label>
        <textarea
         placeholder="Message"
         value={ this.state.message }
         onChange={ e => this.setState({ message: e.target.value})}
         className="form-control" 
        />
      </div>
    );
  }
}

export default Form;
