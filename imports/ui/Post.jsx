import React, { Component, PropTypes } from 'react';

// Post component - represents a single post item
export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2 className="postAuthor">
        	{this.props.post.user_name}
        </h2>
        <h2 className="postTime">
        	{String(this.props.post.timeCreated)}
        </h2>
        <p>{this.props.post.text}</p>
      </div>
    );
  }
}

Post.propTypes = {
  // This component gets the post to display through a React prop.
  // We can use propTypes to indicate it is required
  post: PropTypes.object.isRequired,
};