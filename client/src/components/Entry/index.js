import React, { Component } from 'react';
import './styles.css';

class Entry extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const target = e.target.name
    const authData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.newUser(authData);
    if (target === 'Sign Up') {
      this.props.toggleInstructions
    }
  }

  handleLogout() {
    sessionStorage.clear();
    this.props.clearUser();
  }

  renderLogout() {
    return (
      <a onClick={ this.handleLogout.bind(this) } className="log-out" href="#">Log Out</a>
    )
  }

  newSession() {
    return (
      <form>
        <input
          type="text"
          value={ this.state.email }
          placeholder="Email"
          onChange={ e => this.setState({ email: e.target.value }) }
        />
        <input
          type="password"
          value={ this.state.password }
          placeholder="Password"
          onChange={ e => this.setState({ password: e.target.value }) }
        />
        <button type="submit"
                name="Log In"
                onClick={ this.handleSubmit.bind(this) }>
                Log In
        </button>
        <button type="submit"
                name="Sign Up"
                onClick={ this.handleSubmit.bind(this) }>
                Sign Up
        </button>
      </form>
    )
  }

  render() {
    const token = window.sessionStorage.token
    return(
      <section className="root">
        { token ? this.renderLogout() : this.newSession() }
      </section>
    )
  }
}

export default Entry;
