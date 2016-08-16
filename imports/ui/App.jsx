import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';

import Post from './Post.jsx';
import User from './User.jsx';

// App component - represents the whole app
export default class App extends Component {
  //Return a hash for the posts
  getPosts() {
    return [
      { _id: 1, user_name: "John", timeCreated: new Date("October 13, 2014 11:13:00"), text: 'Hello?' },
      { _id: 2, user_name: "John", timeCreated: new Date("November 20, 2015 08:00:00"), text: 'Anyone here?' },
      { _id: 3, user_name: "John", timeCreated: new Date("July 30, 2016 08:13:00"), text: "I'm a robot" },
      { _id: 4, user_name: "Mr.roboto", timeCreated: new Date("August 01, 2016 15:45:00"), text: 'You are a robot' },
    ];
  }

  //Return a hash for users
  getUsers(){
    return [
      {_id: 1, user_name: "Catman"},
      {_id: 2, user_name: "Dogman"}
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
    return this.getUsers().map((user) => (
        <User key={user._id} user={user} />
    ));
  }

  //Render the user input at the bottom of the screen
  renderInput(){
    
  }

  render() {
    return (
      <div className="container cols">
        <header className="container rows">
          <h1>Meteor Chat</h1>
        </header>
        <div className="rows flex-1">
          <aside className="container flex-space-between cols">
            <p id="usersOnline">Users online</p>
            <div className="userList container cols">
              {this.renderUsers()}
            </div>
          </aside>
          <div className="container cols">
            <main className="postsArea container cols">
              {this.renderPosts()}
            </main>
            <form className="postForm flex-1 container rows flex-space-between">
              <input type="text" />
              <input type="submit" value="Post" className="button-primary" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

