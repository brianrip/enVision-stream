import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

class App extends Component  {
  constructor() {
    super()
    this.state = {
      instructions: false,
    }
  }

  componentWillMount() {
    this.checkForUser();
  }

  checkForUser() {
    if (window.sessionStorage.token) {
      this.props.fetchImages();
    } else {
      this.props.fetchRandomImage();
    }
  }

  toggleInstructions() {
    console.log('toggling instructions');
    this.setState({ instructions: !this.state.instructions })
  }

  render() {
    return (
      <section>
        <Header toggleInstructions={ this.toggleInstructions.bind(this) }/>
        <Main images={ this.props.images }
              showInstructions={ this.state.instructions }
              toggleInstructions={ this.toggleInstructions.bind(this) }
              likeImage={ (image) => this.props.likeImage(image) }
              clearUser={ () => this.props.clearUser }
        />
        <Footer />
      </section>
    );
  }
}

App.propTypes = {
};

export default App;
