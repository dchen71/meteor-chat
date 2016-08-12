import React, { Component, PropTypes } from 'react';

// Post component - represents a single post item
export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="postHeader">
        	<i className="fa fa-user" aria-hidden="true"></i>
        	<h4 className="postAuthor">
        		{this.props.post.user_name}
        	</h4>
        	<h5 className="postTime">
        		{String(this.props.post.timeCreated)}
        	</h5>
        </div>
        <div className="postContent">
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