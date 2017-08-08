import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

import Entry from '../Entry/container'

const Header = ({ toggleInstructions, clearUser }) => {
  return (
    <header>
      <h1 className="title"><Link to="/">enVision</Link></h1>
      <Entry toggleInstructions={ toggleInstructions, clearUser }/>
    </header>
  )
}

export default Header;
