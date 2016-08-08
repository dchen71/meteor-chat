import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';

import Post from './Post.jsx';

// App component - represents the whole app
export default class App extends Component {
  getPosts() {
    return [
      { _id: 1, user_name: "John", timeCreated: new Date("October 13, 2014 11:13:00"), text: 'Hello?' },
      { _id: 2, user_name: "John", timeCreated: new Date("November 20, 2015 08:00:00"), text: 'Anyone here?' },
      { _id: 3, user_name: "John", timeCreated: new Date("July 30, 2016 08:13:00"), text: "I'm a robot" },
      { _id: 4, user_name: "Mr.roboto", timeCreated: new Date("August 01, 2016 15:45:00"), text: 'You are a robot' },
    ];
  }

  //Render the posts
  renderPosts() {
    return this.getPosts().map((post) => (
        <Post key={post._id} post={post} />
    ));
  }

  //Render the side bar showing logged in users
  renderUsers(){

  }

  //Render the user input at the bottom of the screen
  renderInput(){

  }

  render() {
    return (
      <div>
        <header>
          <h1>Meteor Chat</h1>
        </header>
        <aside>
          <div className="userList">
            <div className="user">
              <i className="fa fa-user" aria-hidden="true"></i>
              <p>User1</p>
            </div>
            <div className="user">
              <i className="fa fa-user" aria-hidden="true"></i>
              <p>User2</p>
            </div>
          </div>
        </aside>
        <main className="postsArea">
          {this.renderPosts()}
        </main>
        <div>
          <form className="postForm">
            <input
              type="text"
              placeholder="Say hello!"
            />
            <input type="submit" value="Post" />
          </form>
        </div>
      </div>
    );
  }
}

