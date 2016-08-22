import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Posts } from '../api/posts.js';

import Post from './Post.jsx';
import User from './User.jsx';

// App component - represents the whole app
class App extends Component {
  //Return a hash for users
  getUsers(){
    return [
      {_id: 1, user_name: "Catman"},
      {_id: 2, user_name: "Dogman"}
    ];
  }

  //Render the posts
  renderPosts() {
    return this.props.posts.map((post) => (
        <Post key={post._id} post={post} />
    ));
  }


  //Render the side bar showing logged in users
  renderUsers(){
    return this.getUsers().map((user) => (
        <User key={user._id} user={user} />
    ));
  }

  //Event handler to insert new post
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.postInput).value.trim();

    Meteor.call('posts.insert', text)

    // Clear form
    ReactDOM.findDOMNode(this.refs.postInput).value = '';
  }

  render() {
    return (
      <div className="container cols">
        <header className="container rows">
          <h1>Meteor Chat</h1>
        </header>
        <div className="rows flex-1 container">
          <aside className="container flex-space-between cols col-2">
            <p id="usersOnline">Users online</p>
            <div className="userList container cols">
              {this.renderUsers()}
            </div>
          </aside>
          <div className="container cols content col-10">
            <main className="postsArea container cols flex-1">
              {this.renderPosts()}
            </main>
            <form className="postForm container rows flex-space-between" onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" ref="postInput" className="flex-1"/>
              <input type="submit" value="Post" className="button-primary" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

//Gets data from the posts collection
App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    posts: Posts.find({}, {sort: { timeCreated: 1 }}).fetch(),
  };
}, App);