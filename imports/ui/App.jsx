import React, { Component } from 'react';

import Post from './Post.jsx';

// App component - represents the whole app
export default class App extends Component {
  getPosts() {
    return [
      { _id: 1, user_id: 1, timeCreated: new Date("October 13, 2014 11:13:00"), text: 'Hello?' },
      { _id: 2, user_id: 1, timeCreated: new Date("November 20, 2015 08:00:00"), text: 'Anyone here?' },
      { _id: 3, user_id: 1, timeCreated: new Date("July 30, 2016 08:13:00"), text: "I'm a robot" },
      { _id: 4, user_id: 2, timeCreated: new Date("August 01, 2016 15:45:00"), text: 'You are a robot' },
    ];
  }

  renderPosts() {
    return this.getPosts().map((post) => (
      <Post key={post._id} text={post} />
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

//Setup front end first