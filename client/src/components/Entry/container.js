import { connect } from 'react-redux';
import { newUser } from './actions';

import Entry from './index';

const mapStateToProps = ({ user }) => {
  return { user: user.authData }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newUser: (authData) => dispatch(newUser(authData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
