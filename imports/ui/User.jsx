import React, { Component, PropTypes } from 'react';

// User component - represents a single user item
export default class User extends Component {
  render() {
    return (
      <div className="user">
        <i className="fa fa-user" aria-hidden="true"></i>
        <p>{this.props.user.user_name}</p>
      </div>
    );
  }
}

User.propTypes = {
  // This component gets the user to display through a React prop.
  // We can use propTypes to indicate it is required
  user: PropTypes.object.isRequired,
};