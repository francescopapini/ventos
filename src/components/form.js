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
      <form>
        <input
        placeholder="Your Name"
        value={ this.state.name }
        onChange={ e => this.setState({ name: e.target.value})} />
      </form>
    );
  }
}

export default Form;
