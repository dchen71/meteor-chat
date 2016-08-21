import React, { Component, PropTypes } from 'react';

// Post component - represents a single post item
export default class Post extends Component {
  render() {
    return (
      <div className="post rows">
        <i className="fa fa-user fa-2x" aria-hidden="true"></i>
        <div className="postContent">
        	<h3 className="postAuthor">
        		{this.props.post.user_name}
        	</h3>
        	<h5 className="postTime">
        		{String(this.props.post.timeCreated)}
        	</h5>
        	<p>{this.props.post.text}</p>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  // This component gets the post to display through a React prop.
  // We can use propTypes to indicate it is required
  post: PropTypes.object.isRequired,
};