import { connect } from 'react-redux';
import { newUser, clearUser } from './actions';

import Entry from './index';

const mapStateToProps = ({ user }) => {
  return { user }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newUser: (authData) => dispatch(newUser(authData)),
    clearUser: () => dispatch(clearUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
