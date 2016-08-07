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

  renderPosts() {
    return this.getPosts().map((post) => (
      <Post key={post._id} post={post} />
    ));
  }

  render() {
    return (
      <div>
        <header>
          <h1>Todo List</h1>
        </header>
        {this.renderPosts()}
      </div>
    );
  }
}

