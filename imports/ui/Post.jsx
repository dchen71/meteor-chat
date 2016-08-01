import React, { Component, PropTypes } from 'react';

// Post component - represents a single post item
export default class Post extends Component {
  render() {
    return (
      <li>{this.props.post.text}</li>
    );
  }
}

Post.propTypes = {
  // This component gets the post to display through a React prop.
  // We can use propTypes to indicate it is required
  post: PropTypes.object.isRequired,
};