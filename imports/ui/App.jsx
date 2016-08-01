import React, { Component } from 'react';

import Post from './Post.jsx';

// App component - represents the whole app
export default class App extends Component {
  getPosts() {
    return [
      { _id: 1, user_id: 1, timeCreated: Date.now(), text: 'This is task 1' },
      { _id: 2, user_id: 1, timeCreated: Date.now(), text: 'This is task 2' },
      { _id: 3, user_id: 1, timeCreated: Date.now(), text: 'This is task 3' },
    ];
  }

 

  renderPosts() {
    return this.getPosts().map((post) => (
      <Post key={post._id} post={post} />
    ));
  }

 

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

